const Subscription = require('../models/Subscription');

exports.subscribeToApi = async (req, res) => {
  const { apiId } = req.body;
  try {
    const existing = await Subscription.findOne({ user: req.user._id, api: apiId });
    if (existing) return res.status(400).json({ msg: "Already subscribed" });

    const subscription = await Subscription.create({ user: req.user._id, api: apiId });
    res.status(201).json({ msg: "Subscribed successfully", apiKey: subscription.apiKey });
  } catch (err) {
    res.status(500).json({ msg: "Subscription failed" });
  }
};
