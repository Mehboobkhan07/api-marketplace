const Subscription = require('../models/Subscription');

const rateLimiter = (limit) => {
  return async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) return res.status(401).json({ msg: "API Key required" });

    const subscription = await Subscription.findOne({ apiKey });
    if (!subscription) return res.status(403).json({ msg: "Invalid API Key" });

    // Reset daily
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    if (now - subscription.lastReset > oneDay) {
      subscription.usageCount = 0;
      subscription.lastReset = now;
    }

    if (subscription.usageCount >= limit) {
      return res.status(429).json({ msg: "Rate limit exceeded" });
    }

    subscription.usageCount += 1;
    await subscription.save();
    req.subscription = subscription;
    next();
  };
};

module.exports = rateLimiter;
