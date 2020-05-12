import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/login';

class Logout extends Component<{ dispatch: any }, {}> {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(logout());
	}

	render() {
		return (
			<p>Logging out...</p>
		);
	}
}

const connectedLogoutPage = connect()(Logout);
export default connectedLogoutPage; 