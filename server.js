const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json)

// Home route
app.get('/', (req, res)=>{
    res.send('Main route')
})

app.get('/post', (req, res)=>{
    res.send({
        "message": "post 01 made by Blue-T04"
    })
})

app.post('/post/:id', (req, res)=>{
    const {id} = req.params
    res.send({
        post: `new post added | id : ${id}` 
    })
})



app.listen(PORT, console.log(`Live on  http://localhost:${PORT}`))