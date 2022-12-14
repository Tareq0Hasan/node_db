var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

  if(req.url=="/"){
     let data= fs.readFileSync('home.html');
     res.end(data.toString());
  }
  else if(req.url=='/contact'){
      let data= fs.readFileSync('contact.html');
      res.end(data.toString());

  }
  else if(req.url=="/about"){
    console.log('about');

      let data= fs.readFileSync('about.html','utf8');
      res.end(data.toString());
  }else{
    res.end('<h1>404 not found</h1>');
  }

  

}).listen(8082);

console.log("server is running");







// const fs= require('fs');
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url="/"){

//         // const data = fs.readFile('home.html',(error,data)=>{
//         //     if(error){
//         //         res.end('<h1> data not found </h1>');
//         //     }else{res.end(data.toString())}
//         // });
//         let data = fs.readFileSync('home.html');
//         res.end(data.toString());
    
//     }else if(req.url="/About"){
      
//         // const data = fs.readFile('about.html',(error,data)=>{
//         //     if(error){
//         //         res.end('<h1> data not found </h1>');
//         //     }else{ return res.end(data.toString());}
//         // });
//         let data  = fs.readFileSync('about.html');
//         res.end(data.toString());
        

//     }
//     // }else if(req.url='/contact'){
//     //     const data= fs.readFile('contact.html');
//     //     res.end(data.toString());
//     // }else{
//     //     res.end('<h1> data not found </h1>');
//     // }

// });
// server.listen(8080);
// console.log('server is running');

