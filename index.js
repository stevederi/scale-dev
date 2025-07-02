const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello World')
})

server.listen(8080, () => {
  console.log('Server running on port 8080')
})
