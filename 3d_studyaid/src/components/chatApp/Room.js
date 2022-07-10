import React from 'react'
import "../../css/chat.css"
import io from "socket.io-client";
import { useState } from "react";
import { Chat } from './Chat';
const socket = io.connect("http://localhost:5500");

export const Room = () => {
    const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [showChat, setShowChat] = useState(false);

	const joinRoom = () => {
		socket.emit("joinRoom", { username, room });
		setShowChat(true);
	};
  return (
		<div className="join-container">
			<header className="join-header">
				<h1>Study Rooms</h1>
			</header>
			{!showChat ? (
				<div className="join-main">
					<h3 className="join-main-label">Username</h3>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter username..."
						required
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					/>
					<h3 className="join-main-label">Room</h3>
					<input
						type="text"
						name="room"
						id="room"
                      placeholder="Enter roomname..."
                      required
						onChange={(event) => {
							setRoom(event.target.value);
						}}
					/>
					<button onClick={joinRoom} type="submit" className="btn">
						Join Chat
					</button>
				</div>
			) : (
				<Chat socket={socket} username={username} room={room} />
			)}
		</div>
  );
}
