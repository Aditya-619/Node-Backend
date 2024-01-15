const lib = require('./lib.js')
// import { sum, diff} from './lib.js'
// import { readFileSync } from 'node:fs'

const fs = require('fs');
// const txt = fs.readFileSync('demo.txt', 'utf-8')

fs.readFile('demo.txt', 'utf-8', (err, txt)=>{
    console.log(txt);
})

console.log(lib.sum(6, 9))
console.log(lib.diff(10, 9))