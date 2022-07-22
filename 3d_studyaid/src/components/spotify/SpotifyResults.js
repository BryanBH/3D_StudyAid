import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import PlaylistResult from "./PlaylistResult";
import Player from "./Player";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ModelRendering from "../models/ModelRendering";
import { Room } from "../chatApp/Room";

export default function SpotifyResults() {
	// const accessToken = useAuth(code);
	const navigate = useNavigate();
	const location = useLocation();
	const accessToken = location.state.accessToken;

	const [userInfo, setUserInfo] = useState();
	const [userPlaylists, setUserPlaylists] = useState([]);
	const [playingPlaylist, setPlayingPlaylist] = useState([]);
	const [modelValue, setModelValue] = useState("0");
	const [lofiPlaylists, setLofiPlaylists] = useState([]);
	const [loadLofiButton, setLoadLofiButton] = useState(true);
	const [loadLofi, setLoadLofi] = useState(false);
	const [isRoom, setIsRoom] = useState(false);

	// callback function used in the PlaylistResults component used to set the current playlist uri
	function choosePlaylist(playlist) {
		setPlayingPlaylist(playlist);
	}

	// API calls
	useEffect(() => {
		if (!accessToken) return;
		axios
			.post("http://localhost:5500/getUserInfo", {
				accessToken,
			})
			.then((res) => {
				setUserInfo(res.data);
				// console.log(res.data);
			})
			.catch((err) => {
				// console.log(err);
			});

		axios
			.post("http://localhost:5500/getUserPlaylists", {
				accessToken,
			})
			.then((res) => {
				const up = res.data.userPlaylists;
				if (up.length === 0) {
					setLoadLofiButton(false);
				} else setUserPlaylists(res.data.userPlaylists);
				// console.log(res.data.userPlaylists);
			})
			.catch((err) => console.log(err));

		axios
			.post("http://localhost:5500/getLofiPlaylists", {
				accessToken,
			})
			.then((res) => {
				setLofiPlaylists(res.data.playlists);
				// console.log(res.data.playlists);
			});

		return () => {
			setUserPlaylists([]);
			setLofiPlaylists([]);
		};
	}, [accessToken]);

	return (
		<>
			<Container
				fluid
				className="d-flex flex-column "
				style={{
					height: "100vh",
					position: "absolute",
					width: "100%",
					top: "0",
					left: "0",
					zIndex: "20",
					color: "White",
				}}>
				<h1>
					{userInfo ? userInfo.display_name + "'s Playlists" : ""}
				</h1>
				<div className="row" style={{ overflowY: "auto" }}>
					<div
						className="col-sm-3 my-2"
						style={{
							overflowY: "auto",
							background: "rgba(255,255,255,0)",
							width: "9%",
						}}>
						{userPlaylists.length !== 0
							? userPlaylists.map((playlist) => (
									<PlaylistResult
										playlist={playlist}
										key={playlist.id}
										choosePlaylist={choosePlaylist}
									/>
							  ))
							: lofiPlaylists &&
							  lofiPlaylists.map((playlist) => (
									<PlaylistResult
										playlist={playlist}
										key={playlist.id}
										choosePlaylist={choosePlaylist}
									/>
							  ))}
					</div>
					<div className="col-sm-2 my-2">
						<Form>
							<Form.Label>Choose Your Model</Form.Label>
							<Form.Select
								aira-label="Select model"
								onChange={(event) =>
									setModelValue(event.target.value)
								}>
								<option value={"0"}>Medieval Book</option>
								<option value={"1"}>Astronaut</option>
								{/* <option valaue={"2"}>Mixmo</option> */}
								<option value={"2"}>Iron Giant</option>
								<option value={"3"}>Mini Robot</option>
							</Form.Select>
						</Form>
						<div className="my-2 d-flex justify-content-around">
							<Button
								variant="primary"
								style={{
									width: "100px",
									height: "60px",
									backgroundColor: "whitesmoke",
									opacity: "0.9",
									border: "1px solid black",
									borderRadius: "10px",
									textDecorationLine: "none",
									color: "black",
									cursor: "pointer",
								}}
								onClick={() => {
									navigate("/newPlaylist", {
										state: { accessToken: accessToken },
									});
								}}>
								Create Playlist
							</Button>
							{loadLofiButton ? (
								<Button
									className="pl-2"
									style={{
										width: "100px",
										height: "60px",
										backgroundColor: "whitesmoke",
										opacity: "0.9",
										border: "1px solid black",
										borderRadius: "10px",
										textDecorationLine: "none",
										color: "black",
										cursor: "pointer",
									}}
									onClick={() => {
										setLoadLofi(loadLofi ? false : true);
									}}>
									{loadLofi
										? "Hide Lofi Playlist"
										: "Show Lofi Playlists"}
								</Button>
							) : null}
						</div>
						<div
							style={{
								overflowY: "auto",
								background: "rgba(255,255,255,0)",
								// width: "20%",
							}}>
							{lofiPlaylists !== 0 &&
								loadLofi &&
								lofiPlaylists.map((playlist) => (
									<PlaylistResult
										playlist={playlist}
										key={playlist.id}
										choosePlaylist={choosePlaylist}
									/>
								))}
						</div>
					</div>
					<div className="col-sm-6 my-2"></div>
					<div className="col-sm-2 my-4 d-flex justify-content-center">
						<Form>
							{!isRoom ? (
								<Button
									style={{
										width: "100px",
										height: "60px",
										backgroundColor: "whitesmoke",
										opacity: "0.9",
										border: "1px solid black",
										borderRadius: "10px",
										textDecorationLine: "none",
										color: "black",
										cursor: "pointer",
									}}
									onClick={() => {
										setIsRoom(true);
									}}>
									Create/Join Room
								</Button>
							) : (
								<Room />
							)}
						</Form>
					</div>
				</div>
				<div>
					{" "}
					<Player
						accessToken={accessToken}
						playlistUri={playingPlaylist?.uri}
					/>
				</div>
			</Container>
			<ModelRendering modelValue={modelValue} />
		</>
	);
}

const NavLink = styled(Link)`
	width: 100px;
	height: 40px;
	background-color: whitesmoke;
	opacity: 0.9;
	border-radius: 10px;
	text-decoration-line: none;
	color: black;
	cursor: pointer;
	&:hover {
		text-decoration-line: none;
	}
	text-align: center;
`;
