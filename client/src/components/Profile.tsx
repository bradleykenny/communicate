import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserData, MessageData } from '../actions/';

type ProfileProps = {
	dispatch: any,
	user: UserData,
	messages: Array<MessageData>,
}
type ProfileState = {}

class Profile extends Component<ProfileProps, ProfileState> {

	constructor(props: ProfileProps) {
		super(props);
	}

	render() {
		return(
			<div>
				<p></p>
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

const connectedProfilePage = connect(mapStateToProps)(Profile);
export default connectedProfilePage;