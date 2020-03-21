import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	state = {
		title: this.props.title,
		text: this.props.text,
	}

	render() {
		let { title, text } = this.state;

		return (
			<div className="card">
				<h2 onClick={ this.handleH2Click }>{ title }</h2>
				<p onClick={ this.handlePClick }>{ text }</p>
				<div className="comments">
					{ this.comments() }
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