const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/car/car-list', { navLocation: 'car' });
});

router.get('/', function(req, res, next) {
    res.render('pages/car/car-detail', { navLocation: 'car-detail' });
});

module.exports = router;