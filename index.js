const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    console.log('server received request');
    res.end('Hello World From my file!');
})
aaaa
server.listen(port, err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server listening at port ${port}`);
    }
})
