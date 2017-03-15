import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import './HomePage.css';
import vote from './../images/vote.png';
import download from './../images/download.png';
import upload from './../images/upload.png';
import CompetitionCard from './../components/CompetitionCard';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';

export default class HomePage extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  competitions: []
	}
  }

  componentDidMount(){
	const url = "http://localhost:3001/competitions";
	let env = this;
	axios.get(url)
	  .then(function(r) {
		env.setState({competitions: r.data.data});
	  })
	  .catch(function(err){
		console.log(err);
	  });
  }

  renderCompetitions() {
	if (this.state.competitions.length == 0 ) {
	  return (
		<div className="player-flex-container"> 
		  <CircularProgress size={80} thickness={5}>
		  </CircularProgress>
		</div>
	  )
	}
	console.log(this.state.competitions);
	const competitionCards = this.state.competitions.map(each => <CompetitionCard  
	  songTitle={each.songTitle} 
	  artistName={each.artistName}
	  contestDescription={each.contestDescription}
	  imgUrl={each.imgUrl}
	/>);
  return competitionCards;
  }

  renderJumbotron() {
	const logoList = [
	{
	  altName: "Download",
	  description: "download",
	  logo: download,
	  action:"Download The Stems!",
	  explanation:"Browse through our current remixes and find one you like. Download the stems and make your remix!"
	},
	{
	  altName: "vote",
	  description: "Vote",
	  logo: vote,
	  action:"Vote On Your Peers!",
	  explanation:"Put remixes to the test! Compare remixes to help us the quality of each remix."
	},
	{
	  altName: "Upload",
	  description: "Upload",
	  logo: upload,
	  action:"Upload Your Remix!",
	  explanation:"Finally submit a remix of your own! Your remix will be then be compared to other remixes entered into the same competition."
	}
	];

	const logos = logoList.map(each => {
	  return (
		<div >
		  <img className="logo-img" src={each.logo} alt={each.altName}/>
		  <h3 className="logo-action">{each.action}</h3>
		  <p className="logo-explanation">{each.explanation}</p>
		</div>
	  );
	});


	return (
	  <div className="jumbotron-container">
		<h1> Welcome to RemixMe Competitions </h1>
		<h2> Challenge yourself </h2>
		<hr className="divider-line"></hr>
		<div className="logos-flex-container">
		  {logos}
		</div>
	  </div>
	);
  }

  render() {
	return (
	  <div>
		{this.renderJumbotron()}
		<div className="competition-flex-container">
		  { this.renderCompetitions() }
		  </div>
		  </div>
	)
  }
}
