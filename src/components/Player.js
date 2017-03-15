import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from './../constants/Config';
import { GridTile } from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Player.css';
import testImage from './../images/SongArtTest.jpg';

export default class Player extends Component{
  constructor(props){
	super(props);
	this.state = {
	  currentPlaying: false
	};
	this.onTogglePlay = this.onTogglePlay.bind(this);
  }

  formatStreamUrl(trackId) {
	return `https://api.soundcloud.com/tracks/${trackId}/stream?client_id=${CLIENT_ID}`;
  }

  onTogglePlay(){
	if (this.state.currentPlaying){
	  this._pauseAudio();
	} else {
	  this.props.onTogglePlay(this.props.playerId);
	  this._startAudio();
	}
  }

  _pauseAudio(){
	const trackId = this.props.trackId;
	const audioElement = ReactDOM.findDOMNode(this.refs[trackId]);
	console.log("Pasued");
	audioElement.pause();
	this.setState({currentPlaying: false});
  }

  _startAudio(){
	const trackId = this.props.trackId;
	const audioElement = ReactDOM.findDOMNode(this.refs[trackId]);
	audioElement.play();
	this.setState({currentPlaying: true});
  }


  render(){
	const { 
	  playerId, 
	  trackId 
	} = this.props;
	const audioId = `audio_${trackId}`;

	return (
	  <div className="player">
		<audio id={audioId} ref={trackId} src={this.formatStreamUrl(trackId)} />
		<Card className="player-card">
		  <CardMedia className="competition-card-image">
			<img src={testImage}/>
			<CardActions className="competition-card-actions">
			  {/* <FlatButton onClick={this.onPlay} label="Play" /> */}
			  {/* <a href="#" title="Play video" className="play"></a> */}
			  {/* https://codepen.io/stevenfabre/pen/DvBei */}
			  <button onClick={this.onTogglePlay}>
				{ this.state.currentPlaying ? "Pause" : "Play" }
			  </button>
			  <button> Select this</button>

			</CardActions>
		  </CardMedia>

		</Card>
	  </div>
	)
  }

}
