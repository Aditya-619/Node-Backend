
import fs from 'fs'
import express, { json } from 'express'

const index = fs.readFileSync('data.json', 'utf-8')

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products 

const server = express()

// body parser
server.use(express.json())

// API root or Base URL = google.com/.api/v2/...
// we add => (/something) after the base url
// Like in below case we add /products after localhost:8080 that is localhost:8080/products


// Create - add new data in api
// done with POST method
server.post('/products', (req, res)=>{
    // console.log(req.body)
    products.push(req.body)
    res.json(req.body)
})
// Above create api method will lost all the data if server restarts
// this is beacuse the newly created data is not saved in any database



// Read 
// done with GET method
server.get('/products', (req, res)=>{ 
    res.json(products)
})

// Read
server.get('/products/:id', (req, res)=>{
    // console.log(req.params)
    const id = +req.params.id
    const product = products.find(p=>p.id===id)
    res.json(product)
})
 

// Update 

// done with PUT method and PATCH method
// PUT - In PUT method changes are overidden on previous state of data
// PATCH - In PATCH method changes are only udated/modified to specified request 
server.put('/products/:id', (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id) 
    products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json()
})

server.patch('/products/:id', (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id) 
    const product = products[productIndex]
    products.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json()
})

// Delete
// done with DELETE method
server.delete('/products/:id', (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id) 
    const product = products[productIndex]
    products.splice(productIndex, 1)
    res.status(201).json()
})


server.listen(8080, ()=>{
    console.log("server running")
}) 

