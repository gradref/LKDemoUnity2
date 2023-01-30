var express = require('express') //import express NodeJS framework module
var app = express() // create an object of the express module
var livekitApi = require('livekit-server-sdk')
var bodyParser = require('body-parser')

var AccessToken = livekitApi.AccessToken
const apikey = 'APIigTVhfYbLekP'
const apiSecretKey = 'eexVLyl0Ws4x9dpBfiGPORafqJRNouQiyR4y1oD7BwpC'

app.use(
  '/public/TemplateData',
  express.static(__dirname + '/public/TemplateData')
)
app.use('/public/Build', express.static(__dirname + '/public/Build'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json()) //turn incoming body to json
app.post('/GetToken', (request, response) => {
    console.log(request.body)
    var at = new AccessToken(apikey, apiSecretKey, {
      identity: request.body.name
    })
    at.addGrant({ roomJoin: true, room: request.body.room })
    var token = at.toJwt()
    console.log(token)
    response.send(JSON.stringify({ token: token }))
  })
app.listen(process.env.PORT || 3000, function () {
  console.log('listening on *:3000')
})
console.log('------- server is running -------')
