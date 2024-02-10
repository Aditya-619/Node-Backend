import mongoose from 'mongoose'
import express, { json } from 'express'
import { productRouter } from './router/product.js'
import { userRouter } from './router/user.js'

const server = express()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Database Connected")
}

// body parser
server.use(express.json())

server.use('/products', productRouter)
server.use('/users', userRouter)


server.listen(8080, ()=>{
    console.log("server running")
}) 
