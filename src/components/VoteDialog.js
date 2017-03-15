import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Player from './Player';

export default class VoteDialog extends Component {
  constructor(props){
	super(props);
	this.state = {
	  open: false
	};

	this.handleTogglePlay = this.handleTogglePlay.bind(this);
	this.handleSelectSong= this.handleSelectSong.bind(this);
  }

  handleOpen = () => {
	this.setState({open: true});
  };

  handleTogglePlay(playerId) {
	let stopId = playerId == "0" ? "1" : "0";
	this.refs[stopId]._pauseAudio();
  }

  handleSelectSong(playerId) {
	console.log(playerId);

  }

  handleClose = () => {
	this.setState({open: false});
  };

  render() {
	const actions = [
	  <FlatButton
		label="Cancel"
		primary={true}
		onTouchTap={this.handleClose}
	  />,
	<FlatButton
	  label="Submit"
	  primary={true}
	  keyboardFocused={true}
	  onTouchTap={this.handleClose}
	/>,
	];


	return (
	  <Dialog
		title="Dialog With Actions"
		actions={actions}
		modal={false}
		open={this.state.open}
		onRequestClose={this.handleClose}
	  >
		The actions in this window were passed in as an array of React objects.
		<div className="player-flex-container">
		  <Player 
			isPlaying={this.state.isAudioPlaying} 
			trackId="79973942"
			playerId="0"
			ref="0"
			onTogglePlay={this.handleTogglePlay}
			selectSong={this.handleSelectSong}
		  />
		  <Player 
			isPlaying={this.state.isAudioPlaying}
			trackId="47580057"
			playerId="1"
			ref="1"
			onTogglePlay={this.handleTogglePlay}
			selectSong={this.handleSelectSong}
		  />
		</div>
	  </Dialog>
	);
  }
}
