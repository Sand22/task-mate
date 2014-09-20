var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

exports.dev = {
    rootPath: rootPath,
    port: process.env.PORT || 3000
};

exports.production = {
    rootPath: rootPath,
    port: process.env.PORT || 80
};