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
			{ name: "1" },
			{ name: "2" },
			{ name: "2" },
			{ name: "2" },
			{ name: "2" },
			{ name: "2" },
			{ name: "2" },
			{ name: "2" }

		];

		const competitionCards = competitions.map(each => <CompetitionCard  name={each.name} />);
		return competitionCards;
	}

	renderJumbotron() {
		const logoList = [
			{
				altName: "Download",
				description: "download",
				logo: download
			},
			{
				altName: "vote",
				description: "Vote",
				logo: vote
			},
			{
				altName: "Upload",
				description: "Upload",
				logo: upload
			}
		];

		const logos = logoList.map(each => {
			return (
				<img src={each.logo} alt={each.altName} />
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
