const router = require('express').Router();
const pool = require('../database');
const bcrypt = require('bcrypt');
// const jwtGenerator = require('../utils/jwtGenerator');
// const authorization = require('../middleware/authorization');
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const passwordString = password.toString();
        const user = await pool.query(
            'SELECT * FROM profile WHERE $1 = email',
            [email]
        );
        //! check if user already exists
        if (user.rows.length > 1) {
            res.status(401).send('User already exists');
        } else {
            const hashedPassword = await bcrypt.hash(passwordString, 10);
            const newUser = await pool.query(
                'INSERT INTO profile (email, password) VALUES ($1, $2) RETURNING *',
                [email, hashedPassword]
            );
            // const token = jwtGenerator(newUser.rows[0].user_id);
            // res.json({ token });
            res.send('user registered');
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send('server error');
    }
});

module.exports = router;
