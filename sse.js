module.exports = function (req, res, next) {
  res.sseSetup = function() {
    res.writeHead(200, 