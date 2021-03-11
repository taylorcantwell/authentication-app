const { promisify } = require('util');
const pool = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const catchAsync = require('../util/util');

const signToken = (user) => {
    return jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

exports.register = catchAsync(async (req, res, next) => {
    //!grab email and password from request, and search DB if user exists
    //!with that email
    const { email, password } = req.body;
    console.log(email, password);
    const passwordString = password.toString();
    const existingUser = await pool.query(
        'SELECT * FROM profile WHERE $1 = email',
        [email]
    );

    //! check if user already exists
    if (existingUser.rows.length >= 1) {
        console.log('user exists');
        throw new Error('User already exists');
        //! if user doesn't exist, hash the password and save the email and
        //!password to the DB
    } else {
        const hashedPassword = await bcrypt.hash(passwordString, 10);
        console.log(hashedPassword);
        const newUser = await pool.query(
            'INSERT INTO profile (email, password) VALUES ($1, $2) RETURNING *',
            [email, hashedPassword]
        );

        console.log(newUser);
        //! create a jsonweb token for new registered user
        res.status(201).json({
            authorized: true,
            status: 'success',
            token: signToken(newUser),
            data: { user: newUser.rows[0] },
        });
    }
});

exports.login = catchAsync(async (req, res, next) => {
    //! grab email and password from  body
    const { email, password } = req.body;
    const existingUser = await pool.query(
        'SELECT * FROM profile WHERE $1 = email',
        [email]
    );

    //! check if password provided matches what we have in DB
    const hash = existingUser.rows[0].password;
    const validatePassword = () => {
        return bcrypt.compare(password, hash);
    };

    //!check if username exists and password is valid
    if (!existingUser.rows.length >= 1 || !(await validatePassword())) {
        throw new Error('Incorrect email or password');
    }

    if (validatePassword) {
        res.status(200).json({
            status: 'success',
            token: signToken(existingUser),
        });
    }
});

exports.protect = catchAsync(async (req, res, next) => {
    //! 1) grab token by sending the token in the http header
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    //! check if we grabbed a token
    if (!token) {
        return res.status(401).send('you are not logged in');
    }
    //! 2) validate token

    const decodedToken = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
    );

    console.log(decodedToken);

    //! 3) check if user still exists
    const jwtUser = await pool.query('SELECT * FROM profile WHERE $1 = id', [
        decodedToken.id,
    ]);

    if (!jwtUser)
        new AppError('The user belonging to this token does no longer exist!');
    //! 4) check if user changed password after the token issued.
    //! need to add a password update time in db and compare
    //! 5) if all tests are passed, next is called
    //! add the user details to req object for the next middleware
    console.log(req.user);
    req.user = jwtUser;
    console.log(req.user);
    next();
});
