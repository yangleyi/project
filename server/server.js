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