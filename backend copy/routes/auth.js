const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');
const CLIENT_HOME_PAGE_URL = 'http://localhost:3000';

// auth login
router.get('/login', (req, res) => {
    console.log('login route');
});

// When logout, redirect to client
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
});

// when login failed, send failed msg
router.get('/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'user failed to authenticate.',
    });
});

// when login is successful, retrieve user info
router.get('/success', (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: 'user has successfully authenticated',
            user: req.user,
            cookies: req.cookies,
        });
    }
});

// auth with google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// redirect to home page after successfully login via twitter
router.get(
    '/google/redirect',
    passport.authenticate('google', {
        successRedirect: CLIENT_HOME_PAGE_URL,
        failureRedirect: '/auth/login/failed',
    })
);

module.exports = router;
