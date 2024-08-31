const express = require('express')
const router = express.Router()
const Blog = require('../model/blog')

router.get('/',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((blogs)=>{
      res.render('index',{ title ,blogs})
    })
    .catch((err)=>console.log(err))
  })

  router.post('/',(req,res)=>{
    const blog = new Blog(req.body)
    blog.save()
    .then((result)=>{
      res.redirect('/blogs')
    })
    .catch((err)=>console.log(`Error has : ${err}`))
  })

  router.get('/create', (req, res) => {
    res.render('create', { title: "Create a New Blog" });
  });


  router.get('/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
    .then((result)=>{res.render('details',{blog : result ,title:'Blog Detail'})
    }) 
    .catch((err)=>console.log(err))
  })


  router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{
      res.json({redirect:'/blogs'})
    })
    .catch((err)=>console.log(err))
  })




module.exports = router