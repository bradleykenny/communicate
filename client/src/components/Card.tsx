import React, { Component } from 'react';
import axios from 'axios';
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

type CreatePostProps = {
	sender: any
};

type CreatePostState = {
	receiver?: string,
	title?: string,
	text?: string
};

export class CreatePost extends Component<CreatePostProps, CreatePostState> {

	constructor(props: any) {
		super(props);

		this.state = {
			receiver: '',
			title: '',
			text: ''
		};
	}

	handleCreatePost = (e: any) => {
		e.preventDefault();

		let infoToSend = {...this.state, sender: this.props.sender};
		axios.post(`${ process.env.REACT_APP_API }/messages/send`, infoToSend);
	}

	handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}

	render() {
		const { receiver, title, text } = this.state;
		return (
			<div id="createPost">
				<div className="card">
					<form onSubmit={ this.handleCreatePost }>
						<input type="text" name="receiver" value={ receiver } placeholder="Receiver" onChange={ this.handleChange } />
						<input type="text" name="title" value={ title } placeholder="Title" onChange={ this.handleChange } />
						<input type="text" name="text" value={ text } placeholder="What do you want to say?" onChange={ this.handleChange } />
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Card;