import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import testImage from '../images/SongArtTest.jpg';
import { Link } from 'react-router';

export default class CompetitionCard extends Component {
  render() {
	const {
	  songTitle,
	  artistName,
	  imgUrl,
	  contestDescription
	} = this.props;
	return <Card className="competition-card">
	  <CardMedia className="competition-card-image">
		  <img src={imgUrl}/>
	  </CardMedia>
		<Link to="/competitions/20413">
	  <CardTitle className="competition-card-title" title={songTitle} subtitle={artistName} />
		</Link>
	  <CardText className="competition-card-text">
		{contestDescription}
	  </CardText>
	  <CardActions className="competition-card-actions">
		{/*TODO make the action button a play button*/}
		<FlatButton label="Action2" />
	  </CardActions>
	</Card>
  }
};

