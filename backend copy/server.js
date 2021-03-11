require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const registerRoute = require('./routes/register');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const cookieSession = require('cookie-session');
const passport = require('passport');

app.use(express.json());

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEYS],
    })
);
//!init passport
app.use(passport.initialize());

//!cors to allow us to accept requests from client
app.use(cors());

//!/ deserialize cookie from the browser
app.use(passport.session());

//!routes
app.use('/register', registerRoute);
app.use('/auth', authRoute);
app.use('/profile', profileRoute);

app.listen(4000);
