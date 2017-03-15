const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb')
const  mongoDbQueue = require('mongodb-queue')

const PORT = 3001;
const con = 'mongodb://localhost:27017/test-musik';

const app = express();

let queue = null;

mongodb.MongoClient.connect(con, (err, db) => {
  queue = mongoDbQueue(db, 'contest');
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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


const competitions = [
{
  artImage: "../images/SongArtTest.jpg",
  songName:"My Song 1",
  artistName:"Artist 1",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  soundCloudLink:"https://soundcloud.com/ujico/lullaby",
  prizes:["Prize 1","Prize 2","Prize 3"],
  stemsLink:"https://puu.sh/uJAa3/9a94e2da7e.png",
  startDate:"February 1st, 2017",
  endDate:"March 2nd, 2017",
  winnerAnnounced:"March 10th, 2017"
},
{
  artImage: "../images/SongArtTest.jpg",
  songName:"My Song 1",
  artistName:"Artist 1",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  soundCloudLink:"https://soundcloud.com/ujico/lullaby",
  prizes:["Prize 1","Prize 2","Prize 3"],
  stemsLink:"https://puu.sh/uJAa3/9a94e2da7e.png",
  startDate:"February 1st, 2017",
  endDate:"March 2nd, 2017",
  winnerAnnounced:"March 10th, 2017"
},
{
  artImage: "../images/SongArtTest.jpg",
  songName:"My Song 1",
  artistName:"Artist 1",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  soundCloudLink:"https://soundcloud.com/ujico/lullaby",
  prizes:["Prize 1","Prize 2","Prize 3"],
  stemsLink:"https://puu.sh/uJAa3/9a94e2da7e.png",
  startDate:"February 1st, 2017",
  endDate:"March 2nd, 2017",
  winnerAnnounced:"March 10th, 2017"
},
{
  artImage: "../images/SongArtTest.jpg",
  songName:"My Song 1",
  artistName:"Artist 1",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  soundCloudLink:"https://soundcloud.com/ujico/lullaby",
  prizes:["Prize 1","Prize 2","Prize 3"],
  stemsLink:"https://puu.sh/uJAa3/9a94e2da7e.png",
  startDate:"February 1st, 2017",
  endDate:"March 2nd, 2017",
  winnerAnnounced:"March 10th, 2017"
}
];

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
