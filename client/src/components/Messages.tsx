import React, { Component } from 'react';
import '../style/Messages.css';

import { MessageData } from '../actions/';

type MessagesProps = {
	messages: Array<MessageData>
	sendReceive: "send" | "receive";
}

class Messages extends Component<MessagesProps, {}> {
	getMessages = () => {
		let elements: Array<any> = [];
		this.props.messages && this.props.messages.length > 0 && this.props.messages.forEach((message: MessageData) => {
			let { sender, receiver, title, text, time } = message;
			elements.push(<Message sendReceive={ this.props.sendReceive } sender={ sender } receiver={ receiver } title={ title } text={ text } time={ time } />);
		});
		return elements;
	};

	render() {
		return (
			<div id="messages">
				{ this.getMessages() }
			</div>
		);
	}
}

type MessageProps = {
	sender: string,
	receiver: string,
	title: string,
	text: string,
	time: string,
	sendReceive: "send" | "receive"
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
		let { sendReceive, sender, receiver, time, title, text } = this.props;
		let date = new Date(time);
		let formattedDate = date.toLocaleString([], { hour12: true, hour: '2-digit', minute:'2-digit', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
		return (
			<div className="innerCard">
				{ sendReceive === "receive" && <h2>{ sender }</h2> }
				{ sendReceive === "send" && <h2>{ receiver }</h2> }
				<p id="time">{ formattedDate }</p>
				<h3 onClick={ this.changeTitle }>{ title }</h3>
				<p onClick={ this.getter }>{ text }</p>
			</div>
		);
	}
}

export default Messages;