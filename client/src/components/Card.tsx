import React, { Component } from 'react';
import axios from 'axios';
import '../style/Card.css';

type CardProps = {
	title: string,
	text: string
}

type LimitedAccount = {
	uid: string,
	username: string,
	email: string,
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
					<img src="https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950"></img>
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

type CreatePostProps = {
	sender: any
};

type CreatePostState = {
	receiver?: string,
	title?: string,
	text?: string
	users?: Array<LimitedAccount>
};

export class CreatePost extends Component<CreatePostProps, CreatePostState> {

	constructor(props: any) {
		super(props);

		this.state = {
			receiver: '',
			title: '',
			text: '',
			users: []
		};
	}

	async componentWillMount() {
		let users: any = await axios.get(`${ process.env.REACT_APP_API }/get/user/all`);
		this.setState({ users: users.data });
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

	selectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    	this.setState({ receiver: e.currentTarget.value });
  	}

	render() {
		const { receiver, title, text } = this.state;
		return (
			<div id="createPost">
				<div className="card">
					<form onSubmit={ this.handleCreatePost }>
						<select name="receiver" value={ receiver } onChange={ this.selectChange }>
							<option value="" disabled selected>Receiver ▼</option>
							{ this.state.users && this.state.users.map((o: LimitedAccount) => <option key={o.username} value={o.username}>{o.username}</option>)}
						</select>
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