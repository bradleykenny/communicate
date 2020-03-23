import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Card, { CreatePost } from './Card';
import LeftSidebar from './LeftSidebar';

class App extends Component {
	state = {
		cards: [], // for later ...
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
				<div className="main">
					<LeftSidebar />
					<CreatePost />
					{ this.createCards() }
				</div>
			</div>
		);
	}
}

export default App;
