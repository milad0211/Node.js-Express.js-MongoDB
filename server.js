// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log(req.url ,req.method);

//     res.setHeader('Content','text/html')

//     res.write('<h1>Hello open code</h1>')
//     res.write('<p>Hello  World</p>')
//     res.end()
// })

// server.listen(3000,'localhost',()=>{
//     console.log('Lisentinig for Request on port 3000 !');
// })

const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    const num = _.random(0,20)
    console.log(num);
    
    res.setHeader('Content-Type','text/html')

    let path = './view/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        
        case '/about-me':
            res.statusCode = 301
            res.setHeader("Location",'/about')
            res.end()
            break;
        default:
            path +='404.html'
            res.statusCode = 404
            break;
    }


    fs.readFile(path,(err,data)=>{
        if(err)
            console.log(err);
        else{
            // res.write(data)
            res.end(data)
        }
    })
    // res.write('<heade><link rel="stylesheet" href="#"></heade>')
    // res.write('<h2>Hello milad </h2>')
    // res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('Lisentinig for Request on port 3000 !');
})