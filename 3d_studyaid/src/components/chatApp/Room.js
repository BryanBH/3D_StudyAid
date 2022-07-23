import React from "react";
// import "../../css/chat.css";
import io from "socket.io-client";
import { useState } from "react";
import { Chat } from "./Chat";
import Popout from "react-popout";
const socket = io.connect("http://localhost:5500");

export const Room = ({ closepopout }) => {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [showChat, setShowChat] = useState(false);

	const joinRoom = () => {
		socket.emit("joinRoom", { username, room });
		setShowChat(true);
	};
	return (
		<div
			className="join-container"
			style={{
				maxWidth: "500px",
				color: "black",
				border: "2px solid black",
			}}>
			<header
				className="join-header"
				style={{
					textAlign: "center",
					padding: "20px",
					background: "#667aff",
					borderTopLeftRadius: "5px",
					borderTopRightRadius: "5px",
				}}>
				<h1>Study Rooms</h1>
			</header>
			{!showChat ? (
				<div
					className="join-main"
					style={{ padding: "30px 40px", background: "#7386ff" }}>
					<h3
						className="join-main-label"
						style={{ display: "block", marginBottom: "5px" }}>
						Username
					</h3>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter username..."
						required
						onChange={(event) => {
							setUsername(event.target.value);
						}}
						style={{
							fontSize: "16px",
							padding: "5px",
							height: "40px",
							width: "100%",
						}}
					/>
					<h3
						className="join-main-label"
						style={{ display: "block", marginBottom: "5px" }}>
						Room
					</h3>
					<input
						type="text"
						name="room"
						id="room"
						placeholder="Enter roomname..."
						required
						onChange={(event) => {
							setRoom(event.target.value);
						}}
						style={{
							fontSize: "16px",
							padding: "5px",
							height: "40px",
							width: "100%",
						}}
					/>
					<button
						onClick={joinRoom}
						type="submit"
						className="btn"
						style={{
							cursor: "pointer",
							padding: "5px 15px",
							background: "rgb(36, 32, 32)",
							color: "#667aff",
							border: "0",
							fontSize: "17px",
						}}>
						Join Chat
					</button>
				</div>
			) : (
				<Chat
					socket={socket}
					username={username}
					room={room}
					closepopout={closepopout}
				/>
			)}
		</div>
	);
};
