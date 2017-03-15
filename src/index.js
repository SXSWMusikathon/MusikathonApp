import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import CompetitionListPage from './containers/CompetitionListPage';
import CompetitionDetailPage from './containers/CompetitionDetailPage';
import SignInPage from './containers/SignInPage';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';
import App from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();
ReactDOM.render((
  <Router history={browserHistory}>
	<Route path="/" component={App}>
	  <Route path="/competitions" component={CompetitionListPage} />
	  <Route path="/competitions/:competitionId" component={CompetitionDetailPage} />
	  <Route path="/home" component={HomePage} />
	  <Route path="/sign-in" component={SignInPage} />
	  <Route path="/sign-up" component={SignUpPage} />
	</Route>
  </Router>
  ),
  document.getElementById('root')
);
