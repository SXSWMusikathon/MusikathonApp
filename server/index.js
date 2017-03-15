const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb')
const  mongoDbQueue = require('mongodb-queue')

let competitions = [
  { songTitle: "Contest Title 1",
	artistName:"Artist 1",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/5859feebfbf20aac65002051/1482293004540_res_1600xundefined.jpg?v=1482293004540",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."},
  { songTitle: "Contest Title 2",
	artistName:"Artist 2",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/5759a7d3ba600f9072004b98/1465493618858_res_1600xundefined.jpg?v=1465493618858",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
  { songTitle: "Contest Title 3",
	artistName:"Artist 3",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/572bb189d5978b05150004d1/1462481395314_res_1600xundefined.jpg?v=1462481395314",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
  { songTitle: "Contest Title 4",
	artistName:"Artist 4",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/57154fa5a419b16074000724/1461014557278_res_1600xundefined.jpg?v=1461014557278",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
  { songTitle: "Contest Title 5",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/57bf64382b0c24a53c001c3a/1472164357394_res_1600xundefined.jpg?v=1472164357394",
	artistName:"Artist 5",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
  { songTitle: "Contest Title 6",
	artistName:"Artist 6",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/57bdb38d81fbd59d4c000908/1474312077644_res_1600xundefined.jpg?v=1474312077644",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
  { songTitle: "Contest Title 7",
	artistName:"Artist 7",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/578d435a80df7e9f14000a71/1468875912775_res_1600xundefined.jpg?v=1468875912775",
	contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
  { songTitle: "Contest Title 8",
	artistName:"Artist 8",
	imgUrl: "https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/55a94b778be5e56d1a000063/1437158363008_res_1600xundefined.jpg?v=1437158363008",
	contestDescription:"Lorem ipsum dolor sit amet, e lobortis odio." }

];
const PORT = 3001;
const con = 'mongodb://localhost:27017/test-musik';

const app = express();

let queue = null;

mongodb.MongoClient.connect(con, (err, db) => {
  queue = mongoDbQueue(db, 'contestv2');
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.listen(PORT, ()=>{
  console.log("Listening on 3000");
});

handleGetCompetitions = (req,res) => {
  return res.status(200).json({data: competitions});
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
		return res.status(200).json(data);
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
	  contests.push([submissions[i],submissions[j]]);
	}
  }
  return contests;
}


handleSendContest = (req,res) => {
  const submissions = [
	{ trackId: '298686031', userId: 'sdsds' },
	{trackId: '297628304', userId: 'sdsdsds'},
	{trackId: '297095901', userId: '23232dsds'},
	{trackId: '296490805', userId: 'sdsdsds'},
	{trackId: '298437665', userId: '23232dsds'},
	{trackId: '298517212', userId: '23232dsds'},
	{trackId: '295444129', userId: '23232dsds'},
	{trackId: '298223006', userId: '23232dsds'},
	{trackId: '298437665', userId: '23232dsds'},
	{trackId: '294579563', userId: '23232dsds'},
	{trackId: '294751486', userId: '23232dsds'}
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


handleNewContest = (req,res) => {
  const data = req.body;
  competitions.push(data);
  return res.status(200);
}
app.get('/competitions', handleGetCompetitions);
app.get('/competitions/:id', handleGetCompetitionDetail);
app.get('/vote', handleGetVote);
app.get('/add', handleSendContest);

app.post('/competitions/new', handleNewContest);
