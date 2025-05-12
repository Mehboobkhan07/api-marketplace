const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const checkRole = require('../middlewares/role');
const { createApi, getAllApis } = require('../controllers/api.controller');

router.post('/create', auth, checkRole('Developer'), createApi);
router.get('/all', getAllApis);

module.exports = router;
