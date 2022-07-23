import React, { useEffect, useState } from "react";

export const Chat = ({ socket, username, room, closepopout }) => {
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
		<div
			className="chat-container"
			style={{
				maxWidth: "1800px",
				background: "rgb(69, 64, 64)",
				overflow: "hidden",
			}}>
			<div
				className="chat-header"
				style={{
					background: "#7386ff",
					color: "rgb(36, 32, 32)",
					borderTopLeftRadius: "5px",
					borderTopRightRadius: "5px",
					padding: "15px",
					display: "flex",
					alignItems: "center",
					justifyContent: " space-between",
				}}>
				<h3>Room Name:</h3>
				<h2 id="room-name">{room}</h2>
				<button href="#" onClick={closepopout} className="btn">
					Leave Room
				</button>
			</div>
			<div className="chat-body">
				<div className="message-container">
					<div
						className="chat-messages"
						style={{
							padding: "30px",
							maxHeight: "500px",
							overflowY: "scroll",
							color: "#fff",
						}}>
						<div
							className="message"
							style={{
								padding: "10px",
								marginBottom: "15px",
								backgroundColor: "rgb(36, 32, 32)",
								borderRadius: "5px",
							}}>
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
			<div
				className="chat-form-container"
				style={{ padding: "20px 30px", backgroundColor: "#667aff" }}>
				<div className="form" style={{ display: "flex" }}>
					<input
						id="msg"
						type="text"
						value={currentMessage}
						placeholder="Enter Message Here!"
						style={{
							fontSize: "16px",
							padding: "5px",
							height: "40px",
							flex: "1",
						}}
						onChange={(event) => {
							setCurrentMessage(event.target.value);
						}}
						onKeyPress={(event) => {
							event.key === "Enter" && sendMessage();
						}}
					/>
					<button
						className="btn"
						onClick={sendMessage}
						style={{
							cursor: "pointer",
							padding: "5px 15px",
							background: "rgb(36, 32, 32)",
							color: "#667aff",
							border: "0",
							fontSize: "17px",
						}}>
						<i className="fas fa-paper-plane"></i> Send
					</button>
				</div>
			</div>
		</div>
	);
};
