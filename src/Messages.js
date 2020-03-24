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
				<h2>Some Person</h2>
				<h3>Title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex quam, vitae aliquet erat lobortis lobortis. Aliquam lacus ante, ultrices quis tincidunt id, lacinia at diam. Vestibulum id pulvinar massa. Cras eu nulla quis quam scelerisque vulputate vitae ut arcu. Suspendisse tristique non massa et pretium. Maecenas nisl ligula, egestas ut lorem vel, placerat lacinia sapien. Vivamus maximus hendrerit neque, sed consequat felis sagittis ut. Quisque dolor justo, pulvinar et mauris vel, sagittis consectetur eros. Aliquam maximus vestibulum leo sed efficitur. Nam faucibus pharetra nisl nec ullamcorper. Pellentesque rhoncus metus eu enim blandit, sit amet gravida ligula fermentum. Vestibulum mauris erat, tempor ut lacus non, tincidunt fringilla sapien.</p>
			</div>
		);
	}
}

export default Messages;