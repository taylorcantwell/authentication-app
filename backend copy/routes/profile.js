const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('you are logged in');
});

module.exports = router;
