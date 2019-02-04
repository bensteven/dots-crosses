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
