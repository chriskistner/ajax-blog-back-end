const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/blog-controllers');

router.get('/', ctrl.allBlogs);
router.get('/:id', ctrl.getBlog);
router.delete('/:id', ctrl.deleteBlog);
router.post('/', ctrl.newBlog);
router.put('/:id', ctrl.updateBlog);

module.exports = router