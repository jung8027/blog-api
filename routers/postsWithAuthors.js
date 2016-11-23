const express = require('express');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const router = express.Router();


const postsWithAuthors = (req,res)=>(
	Post.find({}).populate('author').exec((err,data)=>{
		if(err)console.log('error')
		else res.send(data)
	})
)

router.route('/')
  .get(postsWithAuthors);

module.exports = router;