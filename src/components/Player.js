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
	this.onSelectSong = this.onSelectSong.bind(this);
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

  onSelectSong(){
	this.props.selectSong(this.props.playerId);
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
	const giveStyle = {
  	width: '',
  	minWidth: ''
	};
	return (
	  <div className="player">
		<audio 
		  id={audioId} 
		  ref={trackId} 
		  src={this.formatStreamUrl(trackId)} 
		/>
		<Card className="player-card">
		  <CardMedia >
				{/*<img src={testImage}/>*/}
				<div className="give-room" style={giveStyle}>
				  <a 
					onClick={this.onTogglePlay} 
					href="#" 
					title="Play video " 
					className={this.state.currentPlaying ? "play active" : "play"}
				  >
				  </a>
				</div>
			<CardActions className="competition-card-actions">
			  <button onClick={this.onSelectSong}> Select this</button>

			</CardActions>
		  </CardMedia>

		</Card>
	  </div>
	)
  }

}
