import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import { Link } from 'react-router';
import "./HeaderBar.css";

class HeaderBar extends Component {

  constructor(props){
	super(props);
  }


  render() {
	const leftAlign = { textAlign: 'left'};
	const rightAlign = { textAlign: 'right'};
	const middleAlign = { verticalAlign: 'middle'};
	return(
	  <Appbar> 
		<table width="100%">
		  <tbody>
			<tr style={middleAlign}>
			  <td className="mui--appbar-height mui--pull-left"> 
				<Link to="/home" >Home Page </Link>
			  </td>
			  <td className="mui--appbar-height mui--pull-right"> 
				<Link to="/sign-in" > Sign In </Link>
			  </td>
			  <td className="mui--appbar-height mui--pull-right"> 
				<Link to="/sign-up" > Sign Up </Link>
			  </td>
			  <td className="mui--appbar-height mui--pull-right"> 
				<Link to="/competitions" >Competitions</Link>
			  </td>
			</tr>
		  </tbody>
		</table>
	  </Appbar>
	)
  }
}

export default HeaderBar;
