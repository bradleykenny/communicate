import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style/App.css';

import Home from './Home';
import Login from './Login';

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
