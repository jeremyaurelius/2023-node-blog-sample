import mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, {
  // automatically generates createdAt, updatedAt timestamps to the blogPost Schema
  timestamps: true,
});

// it will look for blogposts collection
export const BlogPost = mongoose.model('BlogPost', blogPostSchema);
