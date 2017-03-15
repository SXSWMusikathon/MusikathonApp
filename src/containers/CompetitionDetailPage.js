import React, { Component } from 'react';
import './CompetitionDetailsPage.css';
import myImage from '../images/SongArtTest.jpg'
import CompetitionSteps from '../components/CompetitionSteps';
import PrizeCard from '../components/PrizeCard'
export default class CompetitionDetailPage extends Component { 

  constructor(props) {
	super(props);
	this.competitions = 
	  {artImage: "../images/SongArtTest.jpg",
		songName:"My Song 1",
		artistName:"Artist 1",
		details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
		soundCloudLink:"https://soundcloud.com/ujico/lullaby",
		prizes:["Prize 1","Prize 2","Prize 3"],
		stemsLink:"https://puu.sh/uJAa3/9a94e2da7e.png",
		startDate:"February 1st, 2017",
		endDate:"March 2nd, 2017",
		winnerAnnounced:"March 10th, 2017"};
  }





  renderTopDetails(){

	return(
	  <div className="competition-details-top">
		{/*http://stackoverflow.com/questions/13518833/making-all-photos-square-via-css*/}
		<img src="https://d3us2i0tqwa7m7.cloudfront.net/channel-banners/55a94b778be5e56d1a000063/1437158363008_res_1600xundefined.jpg?v=1437158363008" className="competition-details-art"></img>
		<div className="competition-details-details">
		  <h1 className="competition-details-title">Remix {this.competitions.songName}</h1>
		  <p>{this.competitions.details}</p>
		</div>
		<div className="competition-steps">
		  <CompetitionSteps/>
		</div>
	  </div>
	);
  }

  renderBotDetails(){
	return(
	  <div className="details-bot-container">
		<h1>PRIZES!</h1>
		<div className="prize-card-div">
		  <PrizeCard place = "1"/>
		  <PrizeCard place = "2"/>
		  <PrizeCard place = "3"/>
		</div>
	  </div>
	)
  }


  render() {
	return (
	  <div>
		<div className = "details-background-top">
		  <div className = "details-container">
			{this.renderTopDetails()}
		  </div>
		</div>
		<div className = "details-container">
		  <div>
			{this.renderBotDetails()}
		  </div>
		</div>
		Extension: { this.props.params.competitionId }
	  </div>
	);
  }
}
