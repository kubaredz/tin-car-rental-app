const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/client/client-list', { navLocation: 'client' });
});

module.exports = router;