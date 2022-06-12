import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
	clientId: "f2cd2bcf898f48cab26780d7f808d219",
});

function MainPage({ code }) {
	const accessToken = useAuth(code);
	const [userInfo, setUserInfo] = useState({});
	const [userPlaylists, setUserPlaylists] = useState({});


	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
		axios
			.post("http://localhost:5500/getUserInfo", {
				accessToken,
			})
			.then((res) => {
				setUserInfo(res.data.userInfo);
				console.log(res.data.userInfo);
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
			<h1>testing</h1>
			<h1>{userInfo.display_name}</h1>
			<h2>{userInfo.id}</h2>
		</>
	);
}

export default MainPage;
