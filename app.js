// const express = require('express')

// //express app
// const app = express()

//Register view Engine
// app.set('view engin','ejs')

// //listen for request
// app.listen(3000)
// app.get('/',(req,res)=>{
//     // res.send(' Home Page !')
//     res.sendFile('./view/index.html',{root: __dirname})

// })

// app.get('/about',(req,res)=>{
//     // res.send('About Page')
//     res.sendFile('./view/about.html',{root: __dirname})
// })

// //rooter
// // app.get('/about',(req,res)=>{
// //     res.sendFile('./view/about.html',{root:__dirname})
// // })
// // //redirect

// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })
// //404
// app.use((req,res)=>{
//     res.sendFile('./view/404.html',{root:__dirname})
// })
const express = require("express");
const { title } = require("process");
const morgan = require('morgan');
const mongoose = require('mongoose');
const { error } = require("console");
const blogRoutes = require('./routes/blogRoutes')
const app = express();

//register View Engine
app.set("view engine", "ejs");
//baraye tagiire name file views
// app.set('views','opencode')

//


//Connect To MongoDB
const dbURI = "mongodb+srv://milad:milad123@nodecourse.ufvpf.mongodb.net/node-course?retryWrites=true&w=majority&appName=nodecourse"

//harzaman be db vasl shod biad listen kone!
mongoose.connect(dbURI)
.then((result)=>app.listen(3001 ,console.log('db conected !')))
.catch((error)=>console.log(`Erro has : ${error}`))
//Middleware and Static File
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// app.use((req,res,next)=>{
//     console.log('New Request Was Made :');
//     console.log('Host : ',req.hostname);
//     console.log('Path : ',req.path);
//     console.log('Host : ',req.hostname);
//     console.log('Method : ',req.method);
//     next()
// })

app.use(morgan('tiny'))

// //adding blog
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'new blog1',
//         snippet:"about my new blog1",
//         body:'Lorem ipsum, dolor sit amet consectetur adipisicing'
//     })
//     blog.save()
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))
// })

// //getting all blogs
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))

// })

// //single blog
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('66d1c814cd7aab1325ece472')
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))
// })

// //deleting single blogs
// app.get('/d-single-blog',(req,res)=>{
//     Blog.findByIdAndDelete('66d2e5e25c5fc05915cc3382')
//     .then((result)=>{
//         if(result){
//             res.send(`Document Deleted : ${result}`)
//         }else{
//             res.send(`Document Not Found !`)
//         }
//     })
//     .catch((err)=>{console.log(err);})
// })
// //deleting all blogs
// app.get('/d-all-blogs',(req,res)=>{
//     Blog.deleteMany({})
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))
// })


//routes

app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Bahram in Journey",
  //     snippet:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
  //   },
  //   {
  //     title: "How to Fix Bugs",
  //     snippet:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
  //   },
  //   {
  //     title: "NASA Finds Water in Planet",
  //     snippet:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
  //   }
  // ];

  // res.render("index", { title: "Home",blogs});
  res.redirect('/blogs')
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
//blog routes
  app.use('/blogs',blogRoutes)
//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
//redirect
// app.get('/about-milad',(req,res)=>{
//     res.redirect('/about')
// })

// app.get('/home-milad',(req,res)=>{
//     res.redirect('/')
// })
