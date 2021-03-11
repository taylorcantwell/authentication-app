const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authController.protect, (req, res, next) => {
    res.send('this is a protected route');
});

module.exports = router;
