// src/models/Like.js
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;