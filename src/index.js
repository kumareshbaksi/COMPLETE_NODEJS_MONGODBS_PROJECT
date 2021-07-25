const express = require('express')
const path = require('path')
const hbs = require('hbs')
require('./db')
const Register = require('./register')

const { error } = require('console')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// const fs = require('fs')
const srcPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')
// const visitedPath = path.join(__dirname, '../template/views/visited.hbs')

// const Visited = fs.readFileSync(visitedPath)

// app.use(express.static(srcPath))
// Using for dynamic website in hbs
  app.set('view engine', 'hbs')
  app.set('views', templatePath)
  app.get('/', (req, res) =>{
      res.render('index')
  })

  hbs.registerPartials(partialsPath)

// express routing
// app.get('/', (req,res) =>{
//     res.send("This is home page")
// })

 app.get('/about', (req,res) =>{
     res.render('about')
 })
 
 app.get('/services', (req,res) =>{
    res.render('services')
})

app.get('/contact', (req,res) =>{
    res.render('contact')
})

//
app.post('/register', async (req,res) =>{
    try{
        const touristRegister = new Register({
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age,
            email: req.body.email,
            gender: req.body.gender,
        })

        const registred = await touristRegister.save()
        res.status(201).render("index");


    }catch(e){
        res.render('404', {
            message: `${e} this is the reason`
        })
    }
})

app.get('*', (req, res)=>{
    res.render('404', {
        message: 'This page is not found'
    })
})

// Serving
app.listen(80, ()=>{
    console.log(`Your server running on ${80}`)
})