const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()
app.use(bodyParser.json())

app.get('/handler', (req,res)=>{
    //header,body,queryparameter
    //do machine learning model
    res.json({
        name:"Keshav",
        age:3
    })
})
app.post('/conversation',(req,res)=>{
    console.log(req.headers)
    let body = req.body
    console.log(body)
    
})

app.get('/', (req, res) =>{
    res.send("<h1>Welcome</h1>")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})