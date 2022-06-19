import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import { Container } from "react-bootstrap";
import PlaylistResult from "./PlaylistResult";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
	clientId: "f2cd2bcf898f48cab26780d7f808d219",
});

export default function SpotifyResults({ code }) {
	const accessToken = useAuth(code);
	const [userInfo, setUserInfo] = useState();
	const [userPlaylists, setUserPlaylists] = useState();
	const [playingPlaylist, setPlayingPlaylist] = useState();

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

	function nonPremium() {
		alert("User Must Have premium account to use application");
		window.location = "/";
	}
	return (
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
                color: "whitesmoke"
			}}>
			<h1>{userInfo ? userInfo.display_name + "'s Playlists" : ""}</h1>
			<div
				className="row my-2"
				style={{
					overflowY: "auto",
					background: "rgba(255,255,255,0)",
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
			<div>
				{" "}
				<Player
					accessToken={accessToken}
					playlistUri={playingPlaylist?.uri}
				/>
			</div>
		</Container>
	);
}
