import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../style/App.css';

import { getUserInfo, UserData, emptyUser } from '../actions/user';
import { getMessages } from '../actions/messages';

import Header from './Header';
import Card, { CreatePost } from './Card';
import Messages from './Messages';
import Modal from './Modal';

type AppProps = {
	dispatch: any,
	user: UserData
}

type AppState = {
	cards: Array<string>
}

class Home extends Component<AppProps, AppState> {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getUserInfo());
		dispatch(getMessages("b024fee8-2613-4757-b2d0-29e97c708de0", "sent"));
	}
	
	render() {
		let user = this.props.user ? this.props.user : emptyUser();

		return (
			<div className="app">
				<Header user={ user }/>
				<div id="headerSpacer"></div>
				<div className="main">
					<Modal />
					<Messages />
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
	return {
		user
	};
}

const connectedHomePage = connect(mapStateToProps)(Home);
export default connectedHomePage; 