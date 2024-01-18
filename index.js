
import fs from 'fs'
import express from 'express'

const index = fs.readFileSync('data.json', 'utf-8')

const server = express()

// server.get('/', (req, res)=>{

       // some request methods

//     res.send('<h1>Aditya !</h1>')
//     res.sendFile('/home/aditya/Desktop/node-app/data.json')
// })


// Middleware
server.use((req, res, next)=>{
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
    next()
})


// Middleware for particular routes
// const auth = (req, res, next)=>{
//     console.log(req.query)
//     if(req.query.password == '123') {
//         next()
//     } else {
//         res.sendStatus(401);
//     }
// }

// const auth = (req, res, next)=>{
//     console.log(req.query)
//     if(req.body.password == '123') {
//         next()
//     } else {
//         res.sendStatus(401);
//     }
// }

// bodyParser
// Built-in Middleware
// server.use(express.json())

const checkPoint = (req, res, next)=>{
    if(req.query.name == 'Aditya') {
        next()
    } else {
        res.sendStatus(401)
    }
}

// Endpoints
server.get('/', (req, res)=>{
    res.json({type:"GET"})
})

server.get('/product/:id', (req, res)=>{
    console.log(req.params)
    res.send('This is product')
})

server.get('/demo', checkPoint, (req, res)=>{
    // res.json(req.query)
    res.sendFile('/home/aditya/Desktop/node-app/demo.json')
})


// server.post('/', auth,  (req, res)=>{
//     res.json({type:"POST"})
// })

// server.put('/', (req, res)=>{
//     res.json({type:"PUT"})
// })

// server.delete('/', auth, (req, res)=>{
//     res.json({type:"DELETE"})
// })

server.listen(8080, ()=>{
    console.log("server running")
}) 

