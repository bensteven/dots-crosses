var express = require('express')
  , app = express()
  , sse = require('./sse')
  var connections = []
  , votes = {yes: 0, no: 0}