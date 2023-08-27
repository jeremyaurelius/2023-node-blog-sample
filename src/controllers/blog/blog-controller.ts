import { Request, Response } from 'express';
import { BlogPost } from '../../models/blog-post';

export const blogController = {

  index: async (req: Request, res: Response) => {
    try {
      const blogPosts = await BlogPost
        .find() // get all posts
        .sort({ createdAt: -1 }); // sort by creation date in desc order
      res.render('blog/index', {
        title: 'All posts',
        blogPosts,
      });
    } catch (error) {
      console.log('[debug] error');
      res.status(500).send('Internal Server Error');
    }
  },
  
  create: (req: Request, res: Response) => {
    res.render('blog/create', { title: 'Create a new blog post' });
  },
  
  details: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const blogPost = await BlogPost.findById(id);
      if (blogPost) {
        res.render('blog/details', {
          title: blogPost.title,
          blogPost,
        });
      } else {
        res.status(404)
          .render('404', { title: '404' });
      }
    } catch (error) {
      console.log('[debug] error');
      res.status(500).send('Internal Server Error');
    }
  },
  
};
