import React, { Component } from 'react';
import '../style/Card.css';

type CardProps = {
	title: string,
	text: string
}

class Card extends Component<CardProps, {}> {

	constructor(props: CardProps) {
		super(props);
	}

	render() {
		let { title, text } = this.props;

		return (
			<div className="card">
				<h2 >{ title }</h2>
				<p >{ text }</p>
				<div className="comments">
					{ this.comments() }
					<img src="https://i.ytimg.com/vi/yL1z1ZHD0K4/hqdefault.jpg"></img>
				</div>
			</div>
		);
	}

	comments = () => {
		return (
			<input type="text" placeholder="What's your comment?" />
		);
	}
}

export default Card;