var http = require('http');
var fs = require('fs');

//同步读取文件
var data = fs.readFileSync('test.json');

//写入文件
fs.writeFile('input.txt', data,  function(err) {
    if (err) {
        return console.error(err);
    }else{
        console.log("写入成功");
    };
});

http.createServer(function (request, response) {
    response.end(data);
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');