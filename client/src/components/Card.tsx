import React, { Component } from 'react';
import '../style/Card.css';

type CardProps = {
	text: string
}

type CardState = {
	title: string,
	text?: string, // text is optional
}

class Card extends Component<CardProps, CardState> {

	constructor(props: CardProps) {
		super(props);
		this.state = {
			title: "Title",
			text: "Text",
		}
	}

	render() {
		let { title, text } = this.state;

		return (
			<div className="card">
				<h2 onClick={ this.handleH2Click }>{ title }</h2>
				<p onClick={ this.handlePClick }>{ text }</p>
				<div className="comments">
					{ this.comments() }
					<img src="https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950"></img>
				</div>
			</div>
		);
	}

	handleH2Click = () => {
		this.setState({
			title: "You Clicked Me :o",
		});
	}

	handlePClick = () => {
		this.setState({
			text: "Clicked me... :/",
		});
	}

	comments = () => {
		return (
			<input type="text" placeholder="What's your comment?" />
		);
	}
}

export class CreatePost extends Component {
	render() {
		return (
			<div id="createPost">
				<div className="card">
					<form>
						<input type="text" placeholder="What do you want to say?" />
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Card;