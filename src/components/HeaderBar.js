import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router';
import "./HeaderBar.css";

class HeaderBar extends Component {

  constructor(props){
	super(props);
  }


  render() {
	const leftAlign = { textAlign: 'left'};
	const rightAlign = { textAlign: 'right'};
	return(
		<Appbar> 
		  <table width="100%">
		   <tbody>
			<tr>
             <td className="mui--appbar-height" style={leftAlign}>
				<Link to="/"> Home</Link>
			 </td>
             <td className="mui--appbar-height" style={rightAlign}>
				<Link to="/competitions"> Competitions </Link>
			 </td>
             <td className="mui--appbar-height" style={rightAlign}>
				<Link to="/competitions"> Votes </Link>
			 </td>
			</tr>
			</tbody>
		  </table>
		</Appbar>
	)
  }
}

export default HeaderBar;
