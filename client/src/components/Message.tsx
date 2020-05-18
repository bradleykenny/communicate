import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style/Messages.css';

import { MessageData, focusMessage } from '../actions/';

type MessageProps = {
	dispatch?: any,
	message: MessageData,
	sendReceive: "send" | "receive"
}

class Message extends Component<MessageProps, {}> {

	getter = async () => {
		const response = await fetch(process.env.REACT_APP_API + '/ping');
		const body = await response.text();
		this.setState({ text: body });
	};

	updateFocus = (e: any) => {
		const { dispatch } = this.props;
		console.log(this.props.message);
		dispatch(focusMessage(this.props.message));
	}

	changeTitle = () => {
		this.setState({ title: "Clicked the title" });
	}
	
	render() {
		let { sender, receiver, time, title, text } = this.props.message;
		let { sendReceive } = this.props;
		let date = new Date(time);
		
		let exOptions = { hour12: true, hour: '2-digit', minute:'2-digit', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Australia/Sydney' };
		let standardOptions = { hour12: true, hour: '2-digit', minute:'2-digit', weekday: 'short', timeZone: 'Australia/Sydney' };
		let formattedDate = date.toLocaleString([], standardOptions);
		
		return (
			<div className="innerCard" onClick={ this.updateFocus } >
				{ sendReceive === "receive" && <h2>{ sender }</h2> }
				{ sendReceive === "send" && <h2>{ receiver }</h2> }
				<p id="time">{ formattedDate }</p>
				<h3 onClick={ this.changeTitle }>{ title }</h3>
				<p onClick={ this.getter }>{ text }</p>
			</div>
		);
	}
}

function mapStateToProps(state: any) {
	const { focusMessage } = state.focusMessage;
	return {
		focusMessage
	};
}

const connectedMessage = connect(mapStateToProps)(Message);
export default connectedMessage;