import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		const { title, text } = this.props;
		return (
			<div className="card">
				<h2>{ title }</h2>
				<p>{ text }</p>
			</div>
		);
	}
}

export default Card;