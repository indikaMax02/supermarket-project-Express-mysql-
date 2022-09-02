const express=require('express')
const app=express()
const mongoose=require('mongoose')
const port=4000
const mysql = require('mysql')
const db=require('./configs/db.configs')
const customer=require('./routes/customer')


app.use(express.json())
app.use('/',customer)



app.listen(port,()=>{
    console.log(`server is started in port ${port}`)
})

