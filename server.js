var express = require('express') //import express NodeJS framework module
var app = express() // create an object of the express module
var http = require('http').Server(app) // create a http web server using the http library

app.use(
  '/public/TemplateData',
  express.static(__dirname + '/public/TemplateData')
)
app.use('/public/Build', express.static(__dirname + '/public/Build'))
app.use(express.static(__dirname + '/public'))

http.listen(process.env.PORT || 3000, function () {
  console.log('listening on *:3000')
})
console.log('------- server is running -------')
