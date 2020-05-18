import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style/Messages.css';

import Message from './Message';
import { MessageData, focusMessage } from '../actions/';

type MessagesProps = {
	messages: Array<MessageData>
	sendReceive: "send" | "receive";
}

export default class Messages extends Component<MessagesProps, {}> {

	getMessages = () => {
		let elements: Array<any> = [];
		this.props.messages && this.props.messages.length > 0 && this.props.messages.forEach((message: MessageData) => {
			let { mid, sender, receiver, title, text, time } = message;
			elements.push(
				<Message key={ mid } sendReceive={ this.props.sendReceive } message={ message }/>
			);
		});
		elements.sort((a: any, b: any) => { return Date.parse(b.props.message.time) - Date.parse(a.props.message.time); })
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