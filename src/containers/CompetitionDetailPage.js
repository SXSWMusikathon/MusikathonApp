import React, { Component } from 'react';

export default class CompetitionDetailPage extends Component { 
  constructor(props) {
	super(props);
  }

  render() {
	return (
		<div> Detail { this.props.params.competitionId } </div>
		);
  }
}
