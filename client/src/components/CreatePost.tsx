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
};

class CreatePost extends Component<CreatePostProps, CreatePostState> {

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
		if (infoToSend.text && infoToSend.title && infoToSend.receiver) {
			axios.post(`${ process.env.REACT_APP_API }/messages/send`, infoToSend);
			alert("Message sent.");
			this.setState({ receiver: '', title: '', text: '' });
		} else {
			alert("Missing something?");
		}
	}

	handleChange = (e: any) => {
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
					<form onSubmit={ this.handleCreatePost } className="createPostForm">
						<select className="textField" name="receiver" value={ receiver } onChange={ this.selectChange }>
							<option value="" disabled selected>Receiver ▼</option>
							{ this.state.users && this.state.users.map((o: LimitedAccount) => <option key={o.username} value={o.username}>{o.username}</option>)}
						</select>
						<input type="text" name="title" value={ title } placeholder="Title" onChange={ this.handleChange } className="createTitle" />
						<textarea name="text" value={ text } placeholder="What do you want to say?" onChange={ this.handleChange } className="createText" />
						<button>Submit</button>
						<button className="secondaryBtn">Hide</button>
					</form>
				</div>
			</div>
		);
	}
}

export default CreatePost;