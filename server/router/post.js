const express = require('express')
const controller = require('../controller/post')

const router = express.Router();

router.get('/', controller.getPosts);
router.post('/', controller.createPost);
router.put('/', controller.updatePost);
router.delete('/', controller.deletePost);

module.exports = router