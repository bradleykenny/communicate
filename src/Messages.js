import React, { Component } from 'react';
import './Messages.css';

class Messages extends Component {
	render() {
		return (
			<div id="leftSidebar">
				<div id="messages">
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
				</div>
			</div>
		);
	}
}

class Message extends Component {
	render() {
		return (
			<div class="innerCard">
				<p>Some words</p>
			</div>
		);
	}
}

export default Messages;