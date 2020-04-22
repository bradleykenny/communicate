import React, { Component } from 'react';
import './style/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './Home';
import Login from './Login';

class App extends Component<{}, {}> {	
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
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

function About() {
	return <h1>About</h1>;
}

export default App;
