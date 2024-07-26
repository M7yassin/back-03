const express= require("express")
const app = express()
const port = process.env.PORT||3000

app.set('view engine','hbs');
const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

const viewsDirectory = path.join (__dirname , '../templates/views')
app.set('views', viewsDirectory);


var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../Templates/partials")
hbs.registerPartials(partialsPath)

app.get('/',(req,res)=>{
    res.render('index',{
        title: "HOME",
        desc:"This is Home Page",
        contactLink:"#"
    }
    )
})
app.get('/service',(req,res)=>{
    res.render('service',{
        title: "SERVICE",
        name:"Mohammed",
        city:"Tartous",
        age:"24",
        img1: "images/trainer.jpg",
        contactLink:"#"
    }
    )
})
app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "Shaza",
        city:"Damascus",
        age: 25,
        img2: "images/trainer2.jpg",
        contactLink:"#"
    })
})
app.listen(port,()=>{
    console.log("app is listening on port 3000")
})