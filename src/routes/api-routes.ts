import express = require('express');
import { blogPostRoutes } from './api/blog-post-routes';

const apiRoutes = express.Router();

apiRoutes.use(blogPostRoutes);

export { apiRoutes };
