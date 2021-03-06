import React, { Component } from "react";
import { connect } from "react-redux";

import { MessageData, emptyMessage } from "../actions";

import "../style/Card.css";

type CardProps = {
	title?: string;
	text: string;
	focusMessage?: MessageData;
};

class Card extends Component<CardProps, {}> {
	constructor(props: CardProps) {
		super(props);
	}

	render() {
		let { sender, receiver, title, text } = this.props.focusMessage
			? this.props.focusMessage
			: emptyMessage();

		return (
			<div className="card focusCard">
				<h2>{title}</h2>
				<hr></hr>
				<p>
					<span className="fromTo">FROM</span>
					<b>{sender}</b>
				</p>
				<p>
					<span className="fromTo">TO</span>
					<b>{receiver}</b>
				</p>
				<hr></hr>
				<p>{text}</p>
				<div className="comments">{this.comments()}</div>
			</div>
		);
	}

	comments = () => {
		return (
			<input
				className="textField"
				type="text"
				placeholder="What's your comment?"
				disabled
			/>
		);
	};
}

function mapStateToProps(state: any) {
	const { focusMessage } = state.focusMessage;
	return {
		focusMessage,
	};
}

const connectedCard = connect(mapStateToProps)(Card);
export default connectedCard;
