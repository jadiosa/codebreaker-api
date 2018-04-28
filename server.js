var server = require('./app/app');
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server running App Empresariales on port %d', port);
});
