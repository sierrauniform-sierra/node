let express = require('express')
let path = require('path')
let app = express()

app.set('view engine','ejs')

let directpath = path.join(__dirname,"\curd")

// app.use(express.static(directpath))
app.get('',(req,res)=>{
    res.sendFile(`${directpath}/about.html`)
})

app.get('/help',(req,res)=>{
    res.sendFile(`${directpath}/help.html`)
})

app.get('/profile',(req,res)=>{
    const user ={
        name: "Sumit Shrestha",
        email: "sumit@gmail.com",
        contact: 98000000,
        skill: ['php',"javascript",'CSS'],
    }
    res.render('profile',{user})
})

app.get('/login',(_,res)=>{
    res.render('login')
})

app.get("*",(_,res)=>{
    res.sendFile(`${directpath}/noway.html`)
})

app.listen(4000)