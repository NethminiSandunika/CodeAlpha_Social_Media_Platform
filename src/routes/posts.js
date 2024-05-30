// src/routes/posts.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);
router.get('/:id', postController.getPost);

module.exports = router;
