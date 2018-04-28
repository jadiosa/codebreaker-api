var server = require('./app/app');
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server running App Empresariales 2018 on port %d', port);
});
