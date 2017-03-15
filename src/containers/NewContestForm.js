import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import { SOCAN_API_KEY } from './../constants/Config';

export default class NewContestForm extends Component {

  static contextTypes =  {
	router: PropTypes.object
  }

  constructor() {
	super();
	this.state = {
	  contest: {
		songTitle: null,
		artistName: null,
		contestDescription:null
	  },
	  files: [],
	  showLoadingView: false
	}
  }

  renderLoadingView() {
	return (
	  <div className="player-flex-container"> 
		<CircularProgress size={80} thickness={5}>
		</CircularProgress>
	  </div>
	)
  }

  onCreateContest = ()=> {
	console.log(this.state.uploadFile);
	this.context.router.push('/competitions/new');
  }
  onOpenDropzone = ()=>{
	this.dropzone.open();
  }

  handleChangeTitle= (event) => {
	let currentState = this.state.contest;
	currentState.songTitle = event.target.value;
	this.setState({
	  contest: currentState
    });
  };
  handleChangeInfo = (event) => {
	let currentState = this.state.contest;
	currentState.contestDescription = event.target.value;
	this.setState({
	  contest: currentState
    });
  };

  onDrop =  (acceptedFiles) => {
	this.setState({
	  files: acceptedFiles
	});
  }

  uploadWorkDocument = () => {
	this.setState({showLoadingView: true});
	const url = 'http://localhost:3001/competitions/new';
	let data = this.state.contest;
	console.log(data);

	axios.post(url,data)
	  .then((r)=>{
		console.log('y');
	  })
	  .catch((err)=> {
		console.log('x');
	  });
	setTimeout(() => {
	  this.context.router.push('/competitions');
	}, 3000);
  }
  _uploadWorkDocument = ()=>{
	const URL = `https://api.socan.ca/sandbox/SubmitWork?apiKey=${SOCAN_API_KEY}`;
	const objParam = {
	  registration: {
		MEMBER_NO: 9999999,
		CONTACT_EMAIL: 'contact1@test.ca',
		CONTACT_NAME: 'name of contact',
		LANGUAGE: 'E'
	  }
	};
	let dataFile = new FormData();
	dataFile.append(this.state.files[0]);
	const params = JSON.stringify(objParam);
	axios({
	  method: "POST",
	  headers: {"Content-Type": "multipart/form-data"},
	})
	.then(function (response) {
	  console.log(response);
	})
	.catch(function (error) {
	  console.log(error);
	});

  }

  render() {
	const container = {
	  padding: "3em 2em",
	  textAlign: "center"
	}

	const formContainer = {
	  padding: "2em 25%"
	}

	return (
	  <div style={container}>
		<h2 className="sign-in-header"> Create an remix contest </h2>
		<br />
		<div style={formContainer}>
		  <br />
		  <TextField
			hintText="Contest title"
			fullWidth={true}
			value={this.state.contest.songTitle}
			onChange={this.handleChangeTitle}
		  /><br />
		  <TextField
			hintText="Description"
			multiLine={true}
			rows={2}
			fullWidth={true}
			value={this.state.contest.contestDescription}
			onChange={this.handleChangeInfo}
		  />
		  <br />
		  <TextField
			hintText="Prizes"
			multiLine={true}
			rows={2}
			fullWidth={true}
		  />
		  <br />
		  <FlatButton
			onClick={this.onOpenDropzone}
			label="Upload file"
			secondary={true}
			style={{float:"left"}}
		  />
		  <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
			<br />
			<br />
			<br />
			<br />
			{this.state.files.length > 0 ? <div>
			  <h2>Uploaded file</h2> { this.state.files[0].name}
			</div> : 
			  <div> Or drop your SOCAN works registration form. </div>
			  }
			</Dropzone>
			<br />
			<br />
			<br />
			<br />
			{ this.state.showLoadingView ? this.renderLoadingView() :  <FlatButton
			  onClick={this.uploadWorkDocument}
			  label="Create"
			  primary={true}
			  fullWidth={true}
			/>}
		  </div>
		</div>
	);
  }
}
