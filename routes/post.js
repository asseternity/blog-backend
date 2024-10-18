const express = require('express');
const post = express.Router();
const postController = require('../controllers/postController');

post.get('/', postController.getIndex);
post.post('/', postController.postIndex);
post.put('/', postController.putIndex);
post.delete('/', postController.deleteIndex);

module.exports = post;
