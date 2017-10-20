let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');

let server = http.createServer((res,res) => {
    res.statusCode = 200;

    res.setHeader('content-Type','text/plain; charset = utf-8');

    var pathname = url

    fs.redFile()

    res.end(util.inspect(url.parse(req.url)));
});

server.listen(3000,'127.0.0.1', () => {
    console.log('服务器已经运行，请访问http://127.0.0.1:3000/')
})