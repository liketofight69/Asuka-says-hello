'use strict';                     //strict is a literal expression ignored by earlier versions of js.with strict enabled you cannot use undeclared variables.
var http = require('http');       //built in function easiest way to include modules. Reads a js file executes the file, and returns the exports object. node.js provides an http module. Can be used to create an HTTP client of a server.
var port = process.env.PORT || 1337;  //process.env property returns an object containing the user enviroment
var net = require('net');
var url = require('url');






exports.answer = 42;
exports.Text = 'waiting on connection...';
exports.conChk = function () {
    console.log('waiting on connection...');




}






exports.conConf = function () {
    console.log('connection established!');



};

exports.Server = function () {
    http.createServer(function (req, res) { //req is an object containing info about the http request that raised the event and res is used to send back the http response.

        res.writeHead(200, { 'Content-Type': 'text/plain' });//writehead sends a response header to the request. or a status code that is a 3 digit http status code the last potential argument is headers. optionally you can have a statusmessage as the second argument.
        console.log('waiting on connection...')
        /*asuka.conConf();*/
        console.log('connection established!') 
        
        res.end('Hello World\n'); 
    }).listen(port);
    






} 

exports.Hello = function () {

}