const http = require('http');
const getUsers = require('./modules/users');
let url = '';

const server = http.createServer((request, response) => {
    if (request.url === '/users') {
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-Type: text/plain";
        response.write(getUsers());
        response.end();
        
        return
    }
    if (request.url === '/hello') {
        response.status = 400;
        response.statusMessage = "BAD";
        response.header = "Content-Type: text/plain";
        response.write("Enter a name");
        response.end();
        
        return
    }
    url = request.url
    if (request.url === '/hello='+url.substr(7)) { 
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-Type: text/plain";
        response.write(`Hello, ${url.substr(7)}!`);
        response.end();

        return
    }
    if (request.url === '/') {
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-Type: text/plain";
        response.write('Hello, World!');
        response.end();
    
        return
    } 
    else {
        response.status = 500;
        response.statusMessage = "BAD";
        response.header = "Content-Type: text/plain";
        response.write('');
        response.end();
    
        return
    }
});

server.listen(3003, () => {
console.log('Запущен');
});