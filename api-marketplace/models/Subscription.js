const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  api: { type: mongoose.Schema.Types.ObjectId, ref: 'Api' },
  apiKey: { type: String, default: () => uuidv4() },
  usageCount: { type: Number, default: 0 },
  lastReset: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);
