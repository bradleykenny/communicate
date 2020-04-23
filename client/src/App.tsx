import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style/App.css';

import Login from './Login';
import Home from './Home';

class App extends Component<{}, {}> {	
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
