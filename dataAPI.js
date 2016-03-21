var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
//解析传入的请求体req.body
var urlencodedParser = bodyParser.urlencoded({ extended: true })

//同步读取文件
var data = fs.readFileSync('shopListQuery.json').toString();

//post方法访问数据
app.post('/shopListQuery',urlencodedParser,function (req, res) {
    //console.log(req.body)
    res.end(data);
});

var server = app.listen(8081, function () {
    //var host = server.address().address;
    //var port = server.address().port;
});
