import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const data = JSON.parse(fs.readFileSync(path.join(__dirname,"../model/data.json"), 'utf-8'))
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'))

const users = data.users 
// console.log(users)


export const createUser = (req, res)=>{
    // console.log(req.body)
    users.push(req.body)
    res.json(req.body)
}

export const getAllUsers = (req, res)=>{ 
    res.json(users)
}

export const getSingleUser = (req, res)=>{
    // console.log(req.params)
    const id = +req.params.id
    const user = users.find(p=>p.id===id)
    res.json(user)
}
 
export const updateUser = (req, res)=>{
    const id = +req.params.id
    const productIndex = users.findIndex(p=>p.id === id) 
    users.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json()
}

export const replaceUser = (req, res)=>{
    const id = +req.params.id
    const productIndex = users.findIndex(p=>p.id === id) 
    const product = users[productIndex]
    users.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json()
}

export const removeUser = (req, res)=>{
    const id = +req.params.id
    const userIndex = users.findIndex(p=>p.id === id) 
    users.splice(userIndex, 1)
    res.status(201).json()
}