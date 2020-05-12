import React, { Component } from 'react';
import { Router, Switch, Route, useHistory } from "react-router-dom";

import '../style/App.css';

import { history } from '../services/history';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Logout from './Logout';

class App extends Component<{ dispatch: any }, {}> {
	
	constructor(props: any) {
        super(props);

		const { dispatch } = this.props;
		history.listen((location: any, action: any) => {
			// clear alert on location change
            
        });
    }

	render() {
		return (
			<Router history={ history }>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/logout">
						<Logout />
					</Route>
					<Route path="/register">
						<Register />
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
