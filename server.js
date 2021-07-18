const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


// Home route
app.get('/', (req, res)=>{
    res.send('Main route')
})





app.listen(PORT, console.log(`Live on  http://localhost:${PORT}`))