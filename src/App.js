import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Card from './Card';

class App extends Component {	
	createCards = () => {
		let elements = [];
		for (let i = 0; i < 20; i++) {
			elements.push(<Card title="Header" text="Paragraph" />);
		}
		return elements;
	};
	
	render() {
		return (
			<div className="App">
				<Header />
				<div className="cards">
					{ this.createCards() }
				</div>
			</div>
		);
	}
}

export default App;
