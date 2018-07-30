<<<<<<< HEAD
var http = require('http')
var querystring = require('querystring')

http.createServer((req, res) => {
  console.log('req => ',req.body)
//   console.log('res => ',res)
  var postData = ''
  req.setEncoding('utf8')
  
  req.on('data', (trunk) => {
    postData += trunk
  })

  req.on('end', ()=>{
      res.end(postData)
  })
}).listen(8000)

console.log('server is start...')
=======
var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(3000)
>>>>>>> b6e420dafadbe0ecae24b08f371efd88c6376cc5
