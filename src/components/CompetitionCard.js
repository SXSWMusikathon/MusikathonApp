import React from 'react';
import Panel from 'muicss/lib/react/panel';

export default (props)=> {
  const { name } = props;
	return (
		<Panel className="competition-card"> Card { name }</Panel>
		);
}
