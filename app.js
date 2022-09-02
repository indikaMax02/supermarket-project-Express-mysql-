const express=require('express')
const app=express()
const mongoose=require('mongoose')
const port=4000
const mysql = require('mysql')
const db=require('./configs/db.configs')
const customer=require('./routes/customer')
const item = require('./routes/item')
const order = require('./routes/order')
const orderDetail = require('./routes/oredrDetail')


app.use(express.json())
app.use('/',customer)
app.use('/item', item)
app.use('/order', order)
app.use('/orderDetail', orderDetail)



app.listen(port,()=>{
    console.log(`server is started in port ${port}`)
})

