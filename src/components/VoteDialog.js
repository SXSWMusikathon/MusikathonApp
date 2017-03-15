import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import CircularProgress from 'material-ui/CircularProgress';
import Player from './Player';
import axios from 'axios';

export default class VoteDialog extends Component {
  constructor(props){
	super(props);
	this.state = {
	  open: false,
	  tracks: []
	};
	this.handleTogglePlay = this.handleTogglePlay.bind(this);
	this.handleSelectSong= this.handleSelectSong.bind(this);
  }

  componentDidMount() {
	this._fetchContest();
  }

  _fetchContest(){
	const URL = "http://localhost:3001/vote";
	axios({
	  url: URL,
	  method: 'get',
	  responseType: 'json'
	})
	.then((r)=> {
	  console.log(r);
	  let data = r.data.data;
	  this.setState({ tracks: data });
	});
  }

  renderPlayers() {
	if (!this.state.tracks.length) {
	  return (
		<div className="player-flex-container"> 
		  <CircularProgress size={80} thickness={5} />
		</div>
	  );
	} else {
	  return(
		<div className="player-flex-container">
		  <Player 
			trackId={this.state.tracks[0].trackId}
			playerId="0"
			ref="0"
			onTogglePlay={this.handleTogglePlay}
			selectSong={this.handleSelectSong}
		  />
		  <Player 
			trackId={this.state.tracks[1].trackId}
			playerId="1"
			ref="1"
			onTogglePlay={this.handleTogglePlay}
			selectSong={this.handleSelectSong}
		  />
		</div>
	  )
	}
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
		title="Vote"
		actions={actions}
		modal={false}
		open={this.state.open}
		onRequestClose={this.handleClose}
	  >
		The actions in this window were passed in as an array of React objects.
		{ this.renderPlayers()}

	  </Dialog>
	);
  }
}
