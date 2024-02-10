import fs from 'fs'
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))

import { Product } from "../model/product.js"

const products = data.products 

export const createProduct = (req, res)=>{
      
    async function saveModel() {
        try {
            const result = await product.save();
            res.status(201).json(req.body)

        } catch (err) {
            console.log(res.status(400).json(err))
        }
    }
    
    const product = new Product(req.body) 
    // product.title = 'Nokia';
    // product.price = 6000;
    // product.rating = 5;
    // product.stock = 69;
    saveModel()
}

export const getAllProducts = async (req, res)=>{ 
    const products = await Product.find({price:{$gt:10000}});
    res.json(products)
}

export const getSingleProduct = async (req, res)=>{
    // console.log(req.params)
    const id = req.params.id
    // const product = products.find(p=>p.id===id)
    const product = await Product.findById(id)
    res.json(product)
}
 
export const updateProduct = async (req, res)=>{
    const id = req.params.id
    // const productIndex = products.findIndex(p=>p.id === id) 
    // products.splice(productIndex, 1, {...req.body, id:id})
    try {
        const product = await Product.findOneAndUpdate({_id:id}, req.body, {new:true})
        res.status(201).json(product)
    } catch(err) {
        console.log(err)
        res.status(201).json(err)
    }
}

export const replaceProduct = async (req, res)=>{
    const id = req.params.id
    // const productIndex = products.findIndex(p=>p.id === id) 
    // const product = products[productIndex]
    // products.splice(productIndex, 1, {...product, ...req.body})
    try {
        const product = await Product.findOneAndReplace({_id:id}, req.body, {new:true})
        res.status(201).json(product)
    } catch(err) {
        console.log(err)
        res.status(201).json(err)
    }
    // res.status(201).json()
}

export const removeProduct = async (req, res)=>{
    const id = req.params.id
    try {
        const product = await Product.findOneAndDelete({_id:id})
        res.status(201).json(product)
    } catch(err) {
        console.log(err) 
        res.status(201).json(err)
    }
    // res.status(201).json()
}