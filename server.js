const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  res.end('Hello world!!');
})
.listen(8000);