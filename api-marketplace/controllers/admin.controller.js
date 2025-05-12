const User = require('../models/User');
const Api = require('../models/Api');
const Subscription = require('../models/Subscription');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getAllApis = async (req, res) => {
  try {
    const apis = await Api.find().populate('createdBy', 'name email');
    res.json(apis);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find()
      .populate('user', 'name email')
      .populate('api', 'name');
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteApi = async (req, res) => {
  try {
    const api = await Api.findByIdAndDelete(req.params.apiId);
    if (!api) return res.status(404).json({ msg: "API not found" });
    res.json({ msg: "API deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
