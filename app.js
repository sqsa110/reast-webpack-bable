var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
http.createServer(function(req,res){
    var filePath = false;
    console.log(1);
    if(req.url == '/'){
        filePath = 'index.html';
    } else {
        filePath = './' + req.url;
    }
    var absPath = './' + filePath;
    serverStatic(res,absPath);
}).listen(3030);

function serverStatic(res,absPath){
    fs.exists(absPath,function(exists){
        if (exists){
            fs.readFile(absPath,function(err,data){
                if(err){
                    send404(res);
                } else {
                    sendFile(res,absPath,data);
                }
            });
        } else {
            send404(res);
        }
    });
}

function send404(res){
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.write('Error 404:res not found.');
    res.end();
}

function sendFile(res,filePath,fileContents){
    res.writeHead(200,
        {"content-type":mime.lookup(path.basename(filePath))}
    );
    res.end(fileContents);
}
