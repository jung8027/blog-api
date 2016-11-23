const posts = require('./posts-router');
const authors = require('./authors-router');
const postsWithAuthors = require('./postsWithAuthors');

module.exports = {
  posts: posts,
  authors: authors,
  postsWithAuthors: postsWithAuthors,
}