const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    baseUrl: { type: String, required: true },
    docsLink: { type: String },
    category: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Api', apiSchema);
