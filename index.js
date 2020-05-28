'use strict';
const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
const app = express()

// socket.io부분 : 만약에 문제생기면 이 부분들만 들어내면 됨
const http = require('http').createServer(app);
const io = require('socket.io')(http);

//socket.io on
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
//DB Settings
const db = require('./model/db')

//Other Settings
app.set('view engine', 'ejs')

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.use('/', require('./routes/home'))

const port = 3300

http.listen(port, () => {
    console.log('http://localhost:' + port);
  }); // 서버연결