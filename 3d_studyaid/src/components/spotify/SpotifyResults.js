import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import PlaylistResult from "./PlaylistResult";
import Player from "./Player";
import ModelRendering from "../models/ModelRendering";

const spotifyApi = new SpotifyWebApi({
	clientId: "f2cd2bcf898f48cab26780d7f808d219",
});

export default function SpotifyResults({ code }) {
	const accessToken = useAuth(code);
	const [userInfo, setUserInfo] = useState();
	const [userPlaylists, setUserPlaylists] = useState();
	const [playingPlaylist, setPlayingPlaylist] = useState();
	const [modelValue, setModelValue] = useState("1");

	// callback function used in the PlaylistResults component used to set the current playlist uri
	function choosePlaylist(playlist) {
		setPlayingPlaylist(playlist);
	}

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
				setUserPlaylists(res.data.userPlaylists);
				console.log(res.data.userPlaylists);
			})
			.catch((err) => console.log(err));
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
					color:"White",
				}}>
				<h1>
					{userInfo ? userInfo.display_name + "'s Playlists" : ""}
				</h1>
				<div className="row " style={{ overflowY: "auto" }}>
					<div
						className="col-sm-2 my-2"
						style={{
							overflowY: "auto",
							background: "rgba(255,255,255,0)",
							width: "9%",
						}}>
						{userPlaylists &&
							userPlaylists.map((playlist) => (
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
								{/* <option>Select Model</option> */}
								<option value={"1"}>Headphones</option>
								<option value={"2"}>Astronaut</option>
								<option value={"3"}>Medieval Book</option>
								<option value={"4"}>Robot</option>
							</Form.Select>
						</Form>
					</div>
					<div className="col-sm-6 my-2"></div>
					<div className="col-sm-2 my-2"> Chatroom </div>
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
