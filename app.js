const express = require('express')
const app = express()










app.listen(process.env.PORT,(req,res)=>{
    console.log(`Shalom, server started on port ${process.env.PORT}, ${Date()}`)
})