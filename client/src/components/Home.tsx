import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../style/App.css';

import { getUserInfo, UserData, emptyUser, getMessages, MessageData } from '../actions/';
import { history } from'../services/history';

import Header from './Header';
import Card from './Card';
import Messages from './Messages';
import Modal from './Modal';
import CreatePost from './CreatePost';

type AppProps = {
	dispatch: any,
	user: UserData,
	messages: Array<MessageData>
}

type AppState = {
	sendReceive: "send" | "receive"
}

class Home extends Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);
		this.state = {
			sendReceive: "receive"
		}
	}

	componentWillMount() {
		const { dispatch } = this.props;
		if (!localStorage.getItem('sessionID')) history.push("/login");
		dispatch(getUserInfo());
	}

	wantSent = () => {
		const { dispatch } = this.props;
		this.setState({ sendReceive: "send" });
		dispatch(getMessages(this.props.user.uid, "sent"));
	}

	wantReceived = () => {
		const { dispatch } = this.props;
		this.setState({ sendReceive: "receive" });
		dispatch(getMessages(this.props.user.uid, "received"));
	}
	
	render() {
		let user = this.props.user ? this.props.user : emptyUser();
		let messages = this.props.messages ? this.props.messages : [];
		let sendReceive = this.state.sendReceive === "receive";

		return (
			<div className="app">
				<Header user={ user }/>
				<div id="headerSpacer"></div>
				<div className="main">
					<Modal />
					<div id="leftSidebar">
						<p className={ "sendReceiveSelector" + (sendReceive ? " selected" : "") } onClick={ this.wantReceived }>Received</p>
						<p className={ "sendReceiveSelector" + (!sendReceive ? " selected" : "") } onClick={ this.wantSent }>Sent</p>
						<Messages messages={ messages } sendReceive={ this.state.sendReceive }/>
					</div>
					<div id="rightSide">
						<CreatePost sender={ user.uid }/>
						<div id="cards">
							<Card title={ user.uid } text={ user.email }/>
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
	return {
		user,
		messages
	};
}

const connectedHomePage = connect(mapStateToProps)(Home);
export default connectedHomePage; 