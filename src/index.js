const http = require('http');
const getUsers = require('./modules/users');
//for save

const server = http.createServer((request, response) => {
    const paramsFromUrl = new URLSearchParams(request.url);
    const urlValue = paramsFromUrl.values();
    const urlArray = Array.from(urlValue);
    const urlResult = urlArray.toString();
    if (request.url === '/users') {
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-Type: application/json";
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
    if (request.url === '/hello='+urlResult) { 
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-Type: text/plain";
        response.write(`Hello, ${urlResult}!`);
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

const os = require('os');
const ifaces = os.networkInterfaces();
const ip = (ifaces['Loopback Pseudo-Interface 1'])[1].address

server.listen(3003, () => {
console.log('Сервер запущен на '+ ip + ':3003');
});