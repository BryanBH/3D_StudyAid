import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import { Container } from "react-bootstrap";
import PlaylistResult from "../components/spotify/PlaylistResult";
import Player from "../components/spotify/Player";


const spotifyApi = new SpotifyWebApi({
	clientId: "f2cd2bcf898f48cab26780d7f808d219",
});

function MainPage({ code }) {
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

	return (
		<Container
			className="d-flex flex-column py-2"
			style={{ height: "100vh"}}>
			<h1>{userInfo? userInfo.display_name : ""}</h1>
			<div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
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

export default MainPage;
