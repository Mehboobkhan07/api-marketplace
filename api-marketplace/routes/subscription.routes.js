const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { subscribeToApi } = require('../controllers/subscription.controller');

router.post('/subscribe', auth, subscribeToApi);

module.exports = router;
