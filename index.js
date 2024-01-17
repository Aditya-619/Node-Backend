
import fs from 'fs'
import express from 'express'

const index = fs.readFileSync('data.json', 'utf-8')

const server = express()

server.get('/', (req, res)=>{
    res.send('hello!')
})

server.listen(8080, '0.0.0.0') 