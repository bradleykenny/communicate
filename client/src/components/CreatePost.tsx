import React, { Component } from 'react';
import axios from 'axios';
import '../style/Card.css';
import '../style/CreatePost.css';

type LimitedAccount = {
	uid: string,
	username: string,
	email: string,
}

type CreatePostProps = {
	sender: any
};

type CreatePostState = {
	receiver?: string,
	title?: string,
	text?: string
	users?: Array<LimitedAccount>
	showCard?: boolean,
};

class CreatePost extends Component<CreatePostProps, CreatePostState> {

	constructor(props: any) {
		super(props);

		this.state = {
			receiver: '',
			title: '',
			text: '',
			users: [],
			showCard: false,
		};
	}

	async componentWillMount() {
		let users: any = await axios.get(`${ process.env.REACT_APP_API }/get/user/all`);
		this.setState({ users: users.data });
	}

	handleCreatePost = (e: React.FormEvent) => {
		e.preventDefault();

		let infoToSend = {...this.state, sender: this.props.sender};
		if (infoToSend.title && infoToSend.text && infoToSend.receiver) {
			axios.post(`${ process.env.REACT_APP_API }/messages/send`, infoToSend);
			alert("Message sent.");
			this.setState({ receiver: '', title: '', text: '' });
		} else {
			alert("Missing something?");
		}
	}

	handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement> | React.FormEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}

	handleShowHide = (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLParagraphElement>) => {
		e.preventDefault();
		this.setState({ showCard: !this.state.showCard });
	}

	render() {
		const { receiver, title, text } = this.state;
		return (
			<div id="createPost" className={ this.state.showCard ? "createPostActive" : "" }>
				{/* Show fields to send message on true */}
				{ this.state.showCard &&
					<div className="card">
						<form onSubmit={ this.handleCreatePost } className="createPostForm">
							<select name="receiver" value={ receiver } onChange={ this.handleChange }>
								<option value="" disabled selected>Receiver ▼</option>
								{ this.state.users && this.state.users.map((o: LimitedAccount) => <option key={o.username} value={o.username}>{o.username}</option>)}
							</select>
							<input type="text" name="title" value={ title } placeholder="Title" onChange={ this.handleChange } className="createTitle" />
							<textarea name="text" value={ text } placeholder="What do you want to say?" onChange={ this.handleChange } className="createText" />
							<button>Send</button>
							<button className="secondaryBtn" onClick={ this.handleShowHide }>Hide</button>
						</form>
					</div>
				}
				{ !this.state.showCard && 
						<p className="createPostButton" onClick={ this.handleShowHide }>Create</p>
				}
			</div>
		);
	}
}

export default CreatePost;