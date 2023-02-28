var express =  require('express')
var path = require('path')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))

app.get('/', function(req, res){
    console.log('Hello Multiverse, I am Obsessed with Quantum computing')
    res.send('Hello multiverse, I am obsessed with cloud computing')
})


app.listen(3000)
console.log('server listening on port 3000')