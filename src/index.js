import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import CompetitionListPage from './containers/CompetitionListPage';
import HomePage from './containers/HomePage';
import App from './containers/App';
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
