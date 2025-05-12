const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const checkRole = require('../middlewares/role');
const {
  getAllUsers,
  getAllApis,
  getAllSubscriptions,
  deleteUser,
  deleteApi
} = require('../controllers/admin.controller');

router.use(auth, checkRole('Admin'));

router.get('/users', getAllUsers);
router.get('/apis', getAllApis);
router.get('/subscriptions', getAllSubscriptions);
router.delete('/users/:userId', deleteUser);
router.delete('/apis/:apiId', deleteApi);

module.exports = router;
