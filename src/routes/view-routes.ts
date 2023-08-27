import express = require('express');
import { aboutController } from '../controllers/about-controller';
import { page404Controller } from '../controllers/page-404-controller';
import { blogRoutes } from './blog/blog-routes';

const viewRoutes = express.Router();

viewRoutes.use(blogRoutes);

// defines a GET request for the '/' route
viewRoutes.get('/', (req, res) => {
  res.redirect('/blog');
});

// defines a GET request for the '/about' route
viewRoutes.get('/about', aboutController);

viewRoutes.get('/about-us', (req, res) => {
  res.redirect(301, '/about');
});

// any route that hasn't been accounted for by the above route declarations
// will be handled by this use method
viewRoutes.use(page404Controller);

export { viewRoutes };
