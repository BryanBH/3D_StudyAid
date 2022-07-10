import React, { useEffect, useState } from "react";

export const Chat = ({ socket, username, room }) => {
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	const sendMessage = async () => {
		if (currentMessage !== "") {
			console.log("sent");
			await socket.emit("chatMessage", currentMessage);
			setMessageList((list) => [...list, currentMessage]);
			setCurrentMessage("");
		}
	};

	//listens messages
	useEffect(() => {
		socket.off("message").on("message", (data) => {
			setMessageList((list) => [...list, data]);
		});
		console.log("Recieved");
	}, [socket]);

	return (
		<div className="chat-container">
			<div className="chat-header">
				<h3>Room Name:</h3>
				<h2 id="room-name">{room}</h2>
				<a href="/results" className="btn">
					Leave Room
				</a>
			</div>
			<div className="chat-body">
				<div className="message-container">
					<div className="chat-messages">
						<div className="message">
							{messageList.map((messageContent, index) => {
								return (
									<div className="meta" key={index}>
										<p id="meta">
											{messageContent.username}
											<span> {messageContent.time}</span>
										</p>
										<div className="text">
											<p className="text">
												{messageContent.text}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="chat-form-container">
				<div className="form">
					<input
						id="msg"
						type="text"
						value={currentMessage}
						placeholder="Enter Message Here!"
						onChange={(event) => {
							setCurrentMessage(event.target.value);
						}}
						onKeyPress={(event) => {
							event.key === "Enter" && sendMessage();
						}}
					/>
					<button className="btn" onClick={sendMessage}>
						<i className="fas fa-paper-plane"></i> Send
					</button>
				</div>
			</div>
		</div>
	);
};
