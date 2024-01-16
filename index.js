import http from 'http'
import { readFileSync } from 'fs'

const index = readFileSync('data.json', 'utf-8')
const data = readFileSync('info.txt', 'utf-8');


const server = http.createServer((req, res)=>{
    console.log(req.url)  // when working with HTTP requests, the req.url property is part of the request object and represents the URL of the incoming request. It includes the path, query parameters, and any other relevant information.
    console.log("server started")
    // res.setHeader('Content-Type', 'text/html')
    // res.end("<h1>Aditya Hero</h2>")

    // res.setHeader('Content-Type', 'application/json')
    // res.end(index)

    // Routing
    switch(req.url) {
        case '/': 
            res.setHeader('Content-Type', 'application/json')
            res.end(index);
            break;
        case '/info':
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
            break;
        default:
            res.writeHead(404);
            res.end();
    }
})

server.listen(8080)