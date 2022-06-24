import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import PlaylistResult from "./PlaylistResult";
import Player from "./Player";
import ModelRendering from "../models/ModelRendering";
import styled from "styled-components";

const spotifyApi = new SpotifyWebApi({
	clientId: "f2cd2bcf898f48cab26780d7f808d219",
});

export default function SpotifyResults({ code }) {
	const accessToken = useAuth(code);
	const [userInfo, setUserInfo] = useState();
	const [userPlaylists, setUserPlaylists] = useState([]);
	const [playingPlaylist, setPlayingPlaylist] = useState([]);
	const [modelValue, setModelValue] = useState("1");
	const [lofiPlaylists, setLofiPlaylists] = useState([]);
	const [loadLofiButton, setLoadLofiButton] = useState(true);
	const [loadLofi, setLoadLofi] = useState(false);

	// callback function used in the PlaylistResults component used to set the current playlist uri
	function choosePlaylist(playlist) {
		setPlayingPlaylist(playlist);
	}

	// API calls 
	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
		axios
			.post("http://localhost:5500/getUserInfo", {
				accessToken,
			})
			.then((res) => {
				setUserInfo(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
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
				console.log(res.data.userPlaylists);
			})
			.catch((err) => console.log(err));

		axios
			.post("http://localhost:5500/getLofiPlaylists", {
				accessToken,
			})
			.then((res) => {
				setLofiPlaylists(res.data.playlists);
				console.log(res.data.playlists);
			});
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
								<option value={"1"}>Headphones</option>
								<option value={"2"}>Medieval Book</option>
								<option value={"3"}>Astronaut</option>
								<option value={"4"}>Robot</option>
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
								}}>
								<A href="newPlaylist">Create Playlist</A>
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
								}}>
								Create/Join Room
							</Button>
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

const A = styled.a`
	text-decoration: none;
	color: black;
`;
