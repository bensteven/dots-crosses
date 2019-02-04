var express = require('express')
  , app = express()
  , sse = require('./sse')
  var connections = []
  , votes = {yes: 0, no: 0}

  app.engine('jade', require('jade').__express) //__

  app.set('view engine', 'jade')

  app.use(sse)

  app.get('/', function(req, res) {
    res.render('vote')
  })

  app.get('/game', function(req, res) {
    res.render('game')
  })

  app.get('/vote', function(req, res) {
    if (req.query.yes === "true") votes.yes++
    else votes.no++;

    for(var i = 0; i < connections.length; i++) {
      connections[i].sseSend(votes)
    }
    res.sendStatus(200)
})

app.get('/stream', function(req, res) {
  res.sseSetup()
  res.sseSend(votes)
  connections.push(res)
})


