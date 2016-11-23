const express = require('express');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
//const Author = mongoose.model('Author');
const router = express.Router();

const getPosts = (req,res) => (
  Post.find({}, (err, data) =>(
    res.send(data)
  )).populate('author')
)

const getPostById = (req, res) => (
  Post.findById(req.params.id, (err, data) => (
    res.send(data)
  ))
)

const getPostsByDate = (req, res) => (
  Post.find({}, (err, data) =>(
    res.send(data)
  )).sort({date: 'asc'})
)

const getPostsSort = (req, res) => (
  Post.find({}, (err, data) =>(
    res.send(data)
  )).sort({title: 1})
)

const getPostsByTag = (req,res) => (
  Post.find({tags: 'react'}, (err, data) =>(
    res.send(data)
  ))
)

const postPost = (req, res) => {
  let body = req.body;
  Post.create(body, (err, data) => {
    res.send(body)
    console.log(body)
  })
}

const deletePost = (req, res) => (
  Post.findById(req.params.id).remove({}, (err, data) => (
    console.log('POST DELETED')
  ))
)

const updatePost = (req, res) => (
  Post.findById(req.params.id).findOneAndUpdate({}, req.body, (err, data) => (
    console.log('POST UPDATED')
  ))
)


router.route('/')
  .get(getPosts)
  .post(postPost);

router.route('/:id')
  .get(getPostById)
  .delete(deletePost)
  .put(updatePost);

router.route('/sort/by-date')
  .get(getPostsByDate);

router.route('/sort/a-z')
  .get(getPostsSort);

router.route('/tags/react')
  .get(getPostsByTag);

module.exports = router;