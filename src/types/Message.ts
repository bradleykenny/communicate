type Message = {
	_id: string,
	sender: string,
	recipients: Array<string>,
	time: Date,
};

export default Message;