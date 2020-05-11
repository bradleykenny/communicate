import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../style/App.css';

import { getUserInfo } from '../actions/user';

import Header from './Header';
import Card, { CreatePost } from './Card';
import Messages from './Messages';
import Modal from './Modal';

type AppState = {
	cards: Array<string>,
	user: { email: string }
}

class Home extends Component<{ dispatch: any, user: any }, AppState> {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getUserInfo());
	}
	
	render() {
		let user = { email: "" };
		
		if (this.props.user) {
			user = this.props.user;
		} else {
			user = { email: "didnt work" };
		}

		return (
			<div className="app">
				<Header user={{ email: user.email }}/>
				<div id="headerSpacer"></div>
				<div className="main">
					<Modal />
					<Messages />
					<div id="rightSide">
						{/* <CreatePost /> */}
						<div id="cards">
							<Card />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: any) {
	const { user } = state.user;
	console.log("state....");
	console.log(state);
	return {
		user
	};
}

const connectedHomePage = connect(mapStateToProps)(Home);
export default connectedHomePage; 