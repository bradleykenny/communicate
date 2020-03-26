import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Card, { CreatePost } from './Card';
import Messages from './Messages';

type AppState = {
	cards: Array<string>,
}

class App extends Component<{}, AppState> {
	
	constructor(props: any) {
		super(props);
		this.state = {
			cards: [], // for later ...
		}
	}

	createCards = () => {
		let elements = [];
		for (let i = 0; i < 20; i++) {
			elements.push(<Card title="Header" text="Paragraph" />);
		}
		return elements;
	};
	
	render() {
		return (
			<div className="app">
				<Header />
				<div id="headerSpacer"></div>
				<div className="main">
					<Messages />
					<div id="rightSide">
						<CreatePost />
						<div id="cards">
							{ this.createCards() }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
