import { Request, Response } from 'express';
import { pick } from 'lodash';
import { BlogPost } from '../../models/blog-post';

export const blogPostController = {

  // create blog post
  create: async (req: Request, res: Response) => {
    const payload = pick(req.body, 'title', 'snippet', 'body');
    const blogPost = new BlogPost(payload);
    try {
      const result = await blogPost.save();
      console.log('[debug] save result', result);

      if (req.query.redirect) {
        // if post made from view, redirect to /blog page
        res.redirect('/blog');
      } else {
        res.send(result);
      }
      
    } catch (error) {
      console.log('[debug] save error', error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  // get all posts
  getAll: async (req: Request, res: Response) => {
    try {
      const result = await BlogPost
        .find() // get all blog posts
        .sort({ createdAt: -1 }); // sort by creation date in descending order
      console.log('[debug] find result', result);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: 'Not found' });
      }
    } catch (error) {
      console.log('[debug] find error', error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  // get post by id
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log('[debug] id', id);
    try {
      const result = await BlogPost.findById(id);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: 'Not found' });
      }
    } catch (error) {
      console.error('[debug] findById error', error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  // update post by id
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const payload = pick(req.body, 'title', 'snippet', 'body');
      // we set new in the options to get the updated document
      const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, payload, { new: true });
      if (updatedBlogPost) {
        res.send(updatedBlogPost);
      } else {
        res.status(404).send({ message: 'Not found' });
      }
    } catch (error) {
      console.error('[debug] findByIdAndUpdate error', error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  // delete post by id
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await BlogPost.findByIdAndDelete(id);
      if (result) {
        res.send({ message: 'Deletion successful' });
      } else {
        res.status(404).send({ message: 'Not found' });
      }
    } catch (error) {
      console.error('[debug] findByIdAndDelete error', error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

};