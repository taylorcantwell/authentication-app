require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const pool = require('../database');

passport.serializeUser((user, done) => {
    done(null, user.rows[0].id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const existingUser = await pool.query(
            'SELECT * FROM profile WHERE $1 = google_id',
            [id]
        );
        done(null, existingUser);
    } catch (err) {
        done(new Error('Failed to deseralize user'));
    }
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: '/auth/google/redirect',
            clientID: process.env.GOOGLE_AUTH_ID,
            clientSecret: process.env.GOOGLE_AUTH_SECRET,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                //passport callback function

                const { id, displayName } = profile;
                const existingUser = await pool.query(
                    'SELECT * FROM profile WHERE $1 = google_id',
                    [id]
                );

                if (existingUser.rows.length >= 1) {
                    done(null, existingUser);
                    return console.log('user already exists');
                } else {
                    const newUser = await pool.query(
                        'INSERT INTO profile (google_id, name) VALUES ($1, $2) RETURNING *',
                        [id, displayName]
                    );
                    done(null, newUser);
                }
            } catch (error) {
                console.log(error);
            }
        }
    )
);
