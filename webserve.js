const http = require("http");
const { Http2ServerRequest } = require("http2");

const server = http.createServer((request, response) =>{
    if(request.url === "/"){
        response.end("This is the Home Page");
    }else if (request.url === "/about"){
        response.end("This is a breief history about our company");
    }
    else {
        response.end(
        `<h1>Page Cannot be Found !!</h1>
        <p>Go back to the</p> <a href="/"> home page</a>
        `)
    }

}) ;

server.listen(5500);