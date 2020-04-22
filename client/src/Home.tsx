import React, { Component } from 'react';
import './style/App.css';

import Header from './Header';
import Card, { CreatePost } from './Card';
import Messages from './Messages';
import Modal from './Modal';

type AppState = {
	cards: Array<string>,
}

class Home extends Component<{}, AppState> {
	
	constructor(props: any) {
		super(props);
		this.state = {
			cards: [], // for later ...
		}
	}
	
	render() {
		return (
			<div className="app">
				<Header />
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

export default Home;