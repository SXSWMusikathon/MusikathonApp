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
})


app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, ()=>{
  console.log("Listening on 3000");
});

handleGetCompetitions = (req,res) => {
  queue.get((err,msg)=> {
	if (msg) {
	  console.log(msg.id);
	  console.log(msg.payload);
	  queue.ack(msg.ack, function(err, id) {
		console.log("Acked");
	  });
	}
  });
  return res.json({word: "hello"});
}

handleGetCompetitionDetail = (req, res) => {
  return res.json({id: req.params.id});
}

handleGetVote = (req,res) => {
  let data = null;

  queue.get((err,msg)=> {
	if (msg) {
	  console.log(msg.id);
	  console.log(msg.payload);
	  queue.ack(msg.ack, function(err, id) {
		data = msg.payload;
		return res.status(200).json({ data: data});
	  });
	} else {
	  return res.status(400).json({err: err});
	}
  });
}


_generatePermutations = (submissions) =>  {
  let contests = [];
  for (let i=0; i<submissions.length; i++) {
	for (let j=i; j<submissions.length; j++) {
	  contests.push(submissions[i],submissions[j]);
	}
  }
  return contests;
}
handleSendContest = (req,res) => {
  const submissions = [
	  { trackId: '23232', userId: 'sdsds' },
	  { trackId: '323232', userId: 'sdsdsds' },
	  {trackId: '232323', userId: 'sdsdsds'},
	  {trackId: '23232323', userId: '23232dsds'},
	  {trackId: '232323', userId: 'sdsdsds'},
	  {trackId: '23232323', userId: '23232dsds'}
  ];

  const contests = _generatePermutations(submissions);

  for (let i=0; i < contests.length; i++) {
	const data = { data: contests[i] };
	queue.add(JSON.stringify(data),function(err,dt){
	  console.log(dt);
	});
  }

  return res.status(200).json({data: contests});
}
app.get('/competitions', handleGetCompetitions);
app.get('/competitions/:id', handleGetCompetitionDetail);
app.get('/vote', handleGetVote);
app.get('/add', handleSendContest);
