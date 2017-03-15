import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import './HomePage.css';
import vote from './../images/vote.png';
import download from './../images/download.png';
import upload from './../images/upload.png';
import CompetitionCard from './../components/CompetitionCard';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	renderCompetitions() {
		const competitions = [
			{ songTitle: "Song Title 1",
				artistName:"Artist 1",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."},
			{ songTitle: "Song Title 2",
				artistName:"Artist 2",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
			{ songTitle: "Song Title 3",
				artistName:"Artist 3",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
			{ songTitle: "Song Title 4",
				artistName:"Artist 4",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
			{ songTitle: "Song Title 5",
				artistName:"Artist 5",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
			{ songTitle: "Song Title 6",
				artistName:"Artist 6",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
			{ songTitle: "Song Title 7",
				artistName:"Artist 7",
				contestDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." },
			{ songTitle: "Song Title 8",
				artistName:"Artist 8",
				contestDescription:"Lorem ipsum dolor sit amet, e lobortis odio." }

		];

		const competitionCards = competitions.map(each => <CompetitionCard  
															songTitle={each.songTitle} 
															artistName={each.artistName}
															contestDescription={each.contestDescription}
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
					{this.renderCompetitions()}
				</div>
			</div>
		)
	}
}
