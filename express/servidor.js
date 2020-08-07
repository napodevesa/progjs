const express = require('express'); //require = npm install librerías
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)