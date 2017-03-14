import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import CompetitionListPage from './CompetitionListPage';
import HomePage from './HomePage';
import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
	<Route path="/" component={App}>
	  <Route path="/competitions" component={CompetitionListPage} />
	  <Route path="*" component={HomePage} />
	</Route>
  </Router>
  ),
  document.getElementById('root')
);
