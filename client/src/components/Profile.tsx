import React, { Component } from "react";
import { connect } from "react-redux";

import CreatePost from "./CreatePost";
import Header from "./Header";
import Card from "./Card";

import {
	getUserInfo,
	UserData,
	emptyUser,
	getMessages,
	MessageData,
} from "../actions/";

type ProfileProps = {
	dispatch: any;
	user: UserData;
	messages: Array<MessageData>;
};
type ProfileState = {};

class Profile extends Component<ProfileProps, ProfileState> {
	constructor(props: ProfileProps) {
		super(props);
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getUserInfo());
	}

	render() {
		let user = this.props.user ? this.props.user : emptyUser();

		return (
			<div className="app">
				<CreatePost sender={user.uid} />
				<Header user={user} />
				<div id="headerSpacer"></div>
				<div className="main">
					<Card text={user.email} />
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
		messages,
	};
}

const connectedProfilePage = connect(mapStateToProps)(Profile);
export default connectedProfilePage;
