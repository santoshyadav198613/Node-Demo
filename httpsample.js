const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request',
    (request, response) => {
        // magic happens here!


        console.log(request.url);
        console.log(request.method);
        console.log('server is ready');
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'bacon'
        });

     console.log(request.url);

        response.end('<html><body><h1>Hello, World!</h1></body></html>');



        //   const { headers, method, url } = request;
        //   let body = [];
        //   request.on('error', (err) => {
        //     console.error(err);
        //   }).on('data', (chunk) => {
        //       console.log()
        //     body.push(chunk);
        //   }).on('end', () => {
        //     body = Buffer.concat(body).toString();
        //     response.write(body);
        //     response.end();
        //     // At this point, we have the headers, method, url and body, and can now
        //     // do whatever we need to in order to respond to this request.
        //   });


    }).listen(3000);
