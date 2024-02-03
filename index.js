
import express, { json } from 'express'
import { productRouter } from './router/product.js'
import { userRouter } from './router/user.js'

const server = express()

// body parser
server.use(express.json())

server.use('/products', productRouter)
server.use('/users', userRouter)


server.listen(8080, ()=>{
    console.log("server running")
}) 
