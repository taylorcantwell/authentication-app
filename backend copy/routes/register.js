const router = require('express').Router();
const pool = require('../database');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const passwordString = password.toString();
        const user = await pool.query(
            'SELECT * FROM profile WHERE $1 = email',
            [email]
        );

        //! check if user already exists
        if (user.rows.length >= 1) {
            throw new Error('User already exists');
        } else {
            const hashedPassword = await bcrypt.hash(passwordString, 10);
            const newUser = await pool.query(
                'INSERT INTO profile (email, password) VALUES ($1, $2) RETURNING *',
                [email, hashedPassword]
            );

            res.json(`You've sucessfully registered!`);
        }
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;
