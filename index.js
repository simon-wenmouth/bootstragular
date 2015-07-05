
var Hapi = require('hapi');

var server = new Hapi.Server();

var folder = process.env.FOLDER || 'build';

server.connection({
    host: '0.0.0.0',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: folder,
            listing: true
        }
    }
});

server.start();

