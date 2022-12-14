const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
let url_obj= url.parse(req.url,true);
const file_name= `${__dirname}${url_obj.pathname}`;
console.log(file_name);

fs.readFile(file_name,(error,data)=>{
    console.log(error);
    if(error){
        res.writeHead(404,{'content-type':'text/html' });
        return res.end('<h1>404 not found</h1>');
    }else{
        res.writeHead(202,{'content-type':'text/html'});
        res.write(data);
        res.end();
    }
})

})

console.log('server is running');
server.listen(8080);