var http = require("http");
var con = http.createServer((req , res)=>{
    console.log(req.body);
    res.writeHead(200, {"Content-type" : "Text/plain"});
    res.end("Helo")
});
con.listen(8080);


http.createServer(function(req, res){
    res.writeHead(200, )
})