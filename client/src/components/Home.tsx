import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/App.css';

import Header from './Header';
import Card, { CreatePost } from './Card';
import Messages from './Messages';
import Modal from './Modal';

type AppState = {
	cards: Array<string>,
}

class Home extends Component<{ dispatch: any }, AppState> {

	componentDidMount() {
		// this.props.dispatch(userActions.getAll());
    }
	
	render() {
		return (
			<div className="app">
				<Header user={{ email: "bradkenny@gmail.com"}}/>
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
	const { user } = state.auth;
	return {
		user
	};
}

const connectedLoginPage = connect(mapStateToProps)(Home);
export default connectedLoginPage; 