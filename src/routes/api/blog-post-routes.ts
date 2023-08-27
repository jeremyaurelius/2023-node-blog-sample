import express = require('express');
import { blogPostController } from '../../controllers/api/blog-post-controller';

const blogPostRoutes = express.Router();

// create blog post
blogPostRoutes.post('/api/blog-posts', blogPostController.create);

// get all posts
blogPostRoutes.get('/api/blog-posts', blogPostController.getAll);

// get post by id
blogPostRoutes.get('/api/blog-posts/:id', blogPostController.getById);

// update post by id
blogPostRoutes.put('/api/blog-posts/:id', blogPostController.update);

// delete post by id
blogPostRoutes.delete('/api/blog-posts/:id', blogPostController.delete);

export { blogPostRoutes };
