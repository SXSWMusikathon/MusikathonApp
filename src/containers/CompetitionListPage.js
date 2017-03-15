import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import './CompetitionListPage.css';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';

const styles = {
  propContainer: {
	width: 200,
	overflow: 'hidden',
	margin: '20px auto 0',
  },
  propToggleHeader: {
	  margin: '20px auto 10px',
	},
};

export default class TableExampleComplex extends React.Component {

  constructor(props) {
	super(props);

	this.state = {
	  fixedHeader: true,
	  fixedFooter: true,
	  stripedRows: true,
	  showRowHover: true,
	  selectable: false,
	  multiSelectable: false,
	  enableSelectAll: false,
	  deselectOnClickaway: true,
	  showCheckboxes: false,
	  height: 'initial',
	  competitions: []
	};
  }


  componentDidMount() {
	const url = "http://localhost:3001/competitions";
	let env = this;
	axios.get(url)
	  .then(function(r) {
		env.setState({competitions: r.data.data});
	  })
	  .catch(function(err){
		console.log(err);
	  });
  }

  renderLoadingView() {
	return(
	  <div className="player-flex-container"> 
		<CircularProgress size={80} thickness={5}>
		</CircularProgress>
	  </div>
	);
  }
  handleToggle = (event, toggled) => {
	this.setState({
	  [event.target.name]: toggled,
	});
  };

  handleChange = (event) => {
	this.setState({height: event.target.value});
  };

  renderTable() {
	let competitions = this.state.competitions;
	return (
	  <div>
		<Table
		  height={this.state.height}
		  fixedHeader={this.state.fixedHeader}
		  fixedFooter={this.state.fixedFooter}
		  selectable={this.state.selectable}
		  multiSelectable={this.state.multiSelectable}
		>
		  <TableHeader
			displaySelectAll={this.state.showCheckboxes}
			adjustForCheckbox={this.state.showCheckboxes}
			enableSelectAll={this.state.enableSelectAll}
		  >
			<TableRow>
			  <TableHeaderColumn className = "table-small">Song Title</TableHeaderColumn>
			  <TableHeaderColumn className = "table-small">Artist</TableHeaderColumn>
			  <TableHeaderColumn className = "table-small">Status</TableHeaderColumn>
			  <TableHeaderColumn className = "table-large">Description</TableHeaderColumn>
			</TableRow>
		  </TableHeader>
		  <TableBody
			displayRowCheckbox={this.state.showCheckboxes}
			deselectOnClickaway={this.state.deselectOnClickaway}
			showRowHover={this.state.showRowHover}
			stripedRows={this.state.stripedRows}
		  >
			{competitions.map( (row, index) => (
			  <TableRow key={index} selected={row.selected}>
				<TableRowColumn className = "table-small">{row.songTitle}</TableRowColumn>
				<TableRowColumn className = "table-small">{row.artistName}</TableRowColumn>
				<TableRowColumn className = "table-small">Ongoing</TableRowColumn>
				<TableRowColumn className = "table-large">{row.contestDescription}</TableRowColumn>
				<TableRowColumn >{row.status}</TableRowColumn>
			  </TableRow>
			  ))}
			</TableBody>
		  </Table>

		</div>
	);
  }
  render(){
	return(<div>
	  { this.state.competitions.length ? this.renderTable() : this.renderLoadingView() }
	</div>
	)
	}
}