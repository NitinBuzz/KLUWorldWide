const socketIO = require('socket.io');
const express = require('express');
const path = require('path');
const http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const keys = require('./config/keys');
const PORT = process.env.PORT || 3000;
var { eMailModel } = require('./postEmail');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI).then(
  () => {
    const publicPath = path.join(__dirname, '/client');

    app.use(express.static(publicPath));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    io.on('connection', socket => {
      socket.on('postUser', (message, callback) => {
        console.log(message.text);
        //{ text: 'as@as.co' }
        var eMail = new eMailModel();
        eMail.eMail = message.text;
        eMail
          .save()
          .then(eMail => {
            callback();
          })
          .catch(e => {
            callback(e);
          });
      });
    });

    server.listen(PORT, () => {
      console.log(`Server is up on ${PORT}`);
    });
  },
  err => {
    console.log(`Error connecting to DB ${err}`);
  }
);
