var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
//���������������req.body
var urlencodedParser = bodyParser.urlencoded({ extended: true })

//ͬ����ȡ�ļ�
var data = fs.readFileSync('shopListQuery.json').toString();

//post������������
app.post('/shopListQuery',urlencodedParser,function (req, res) {
    console.log(req.body)
    res.end(data);
});

var server = app.listen(8081, function () {
    //var host = server.address().address;
    //var port = server.address().port;
});