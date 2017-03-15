
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb')
const  mongoDbQueue = require('mongodb-queue')

const PORT = 3000;
const con = 'mongodb://localhost:27017/test-musik';

const app = express();

let queue = null;

mongodb.MongoClient.connect(con, (err, db) => {
  queue = mongoDbQueue(db, 'contest');
  queue.get(function(err, msg) {
	console.log('msg.id=' + msg.id)
	console.log('msg.ack=' + msg.ack)
	console.log('msg.payload=' + msg.payload) // 'Hello, World!'
	console.log('msg.tries=' + msg.tries)
  });
})
