import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../style/App.css';

import { getUserInfo, UserData, emptyUser, getMessages, MessageData, getProfileAndMessages } from '../actions/';


import Header from './Header';
import Card, { CreatePost } from './Card';
import Messages from './Messages';
import Modal from './Modal';

type AppProps = {
	dispatch: any,
	user: UserData,
	messages: Array<MessageData>
}

type AppState = {
	cards: Array<string>
}

class Home extends Component<AppProps, AppState> {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getProfileAndMessages());
	}
	
	render() {
		let user = this.props.user ? this.props.user : emptyUser();
		let messages = this.props.messages ? this.props.messages : [];

		return (
			<div className="app">
				<Header user={ user }/>
				<div id="headerSpacer"></div>
				<div className="main">
					<Modal />
					<Messages messages={ messages }/>
					<div id="rightSide">
						{/* <CreatePost /> */}
						<div id="cards">
							<Card text={ user.email }/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: any) {
	const { user } = state.user;
	const { messages } = state.messages;
	console.log(messages);
	return {
		user,
		messages
	};
}

const connectedHomePage = connect(mapStateToProps)(Home);
export default connectedHomePage; 