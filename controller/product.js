import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const data = JSON.parse(fs.readFileSync(path.join(__dirname,"../model/data.json"), 'utf-8'))
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))

const products = data.products 
console.log(products)


export const createProduct = (req, res)=>{
    // console.log(req.body)
    products.push(req.body)
    res.json(req.body)
}

export const getAllProducts = (req, res)=>{ 
    res.json(products)
}

export const getSingleProduct = (req, res)=>{
    // console.log(req.params)
    const id = +req.params.id
    const product = products.find(p=>p.id===id)
    res.json(product)
}
 
export const updateProduct = (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id) 
    products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json()
}

export const replaceProduct = (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id) 
    const product = products[productIndex]
    products.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json()
}

export const removeProduct = (req, res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id) 
    products.splice(productIndex, 1)
    res.status(201).json()
}