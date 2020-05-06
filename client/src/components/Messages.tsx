import React, { Component } from 'react';
import '../style/Messages.css';

type MessageState = {
	sender: string,
	time: string,
	title: string,
	text: string,
}

class Messages extends Component {
	genMessages = () => {
		let elements = [];
		for (let i = 0; i < 20; i++) {
			elements.push(<Message />);
		}
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

class Message extends Component<{ }, MessageState> {
	state = {
		sender: 'Bradley Kenny',
		time: '8:08pm',
		title: 'Information on AirPods Pro',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex quam, vitae aliquet erat lobortis lobortis. Aliquam lacus ante, ultrices quis tincidunt id, lacinia at diam. Vestibulum id pulvinar massa. Cras eu nulla quis quam scelerisque vulputate vitae ut arcu. Suspendisse tristique non massa et pretium. Maecenas nisl ligula, egestas ut lorem vel, placerat lacinia sapien. Vivamus maximus hendrerit neque, sed consequat felis sagittis ut. Quisque dolor justo, pulvinar et mauris vel, sagittis consectetur eros. Aliquam maximus vestibulum leo sed efficitur. Nam faucibus pharetra nisl nec ullamcorper. Pellentesque rhoncus metus eu enim blandit, sit amet gravida ligula fermentum. Vestibulum mauris erat, tempor ut lacus non, tincidunt fringilla sapien.',
	}

	getter = async () => {
		const response = await fetch(process.env.REACT_APP_API + '/ping');
		const body = await response.text();
		this.setState({ text: body });
	};

	changeTitle = () => {
		this.setState({ title: "Clicked the title" });
	}
	
	render() {
		let { sender, time, title, text } = this.state;
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