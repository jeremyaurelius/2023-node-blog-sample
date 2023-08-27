import express = require('express');
import { blogController } from '../../controllers/blog/blog-controller';

const blogRoutes = express.Router();

blogRoutes.get('/blog', blogController.index);

blogRoutes.get('/blog/create', blogController.create);

blogRoutes.get('/blog/:id', blogController.details);

export { blogRoutes };
