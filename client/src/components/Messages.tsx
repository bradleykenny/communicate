import React, { Component } from 'react';
import '../style/Messages.css';

import { MessageData } from '../actions/messages';

type MessagesProps = {
	messages: Array<MessageData>
}

class Messages extends Component<MessagesProps, {}> {
	genMessages = () => {
		let elements: Array<any> = [];
		this.props.messages && this.props.messages.forEach((message: MessageData) => {
			let { sender, receiver, title, text, time } = message;
			elements.push(<Message sender={ sender } receiver={ receiver } title={ title } text={ text } time={ time } />);
		});
		return elements;
	};

	render() {
		return (
			<div id="leftSidebar">
				<div id="messages">
					{ this.genMessages() }
				</div>
			</div>
		);
	}
}

type MessageProps = {
	sender: string,
	receiver: string,
	title: string,
	text: string,
	time: Date
}

class Message extends Component<MessageProps, {}> {

	getter = async () => {
		const response = await fetch(process.env.REACT_APP_API + '/ping');
		const body = await response.text();
		this.setState({ text: body });
	};

	changeTitle = () => {
		this.setState({ title: "Clicked the title" });
	}
	
	render() {
		let { sender, time, title, text } = this.props;
		return (
			<div className="innerCard">
				<h2>{ sender }</h2>
				<p id="time">{ time }</p>
				<h3 onClick={ this.changeTitle }>{ title }</h3>
				<p onClick={ this.getter }>{ text }</p>
			</div>
		);
	}
}

export default Messages;