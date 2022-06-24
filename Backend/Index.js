require("dotenv").config();
const express = require("express");
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
// const path = require("path");
// const http = require("http");
// const socketio = require("socket.io");
// const formatMessage = require("./Utility/messages");
// const {
// 	userJoin,
// 	getCurrentUser,
// 	userLeaves,
// 	getRoomUsers,
// } = require("./Utility/user");
// const server = http.createServer(app);
// const io = socketio(server);
// const botName = "Admin";

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5500, () => {
	console.log("Listening on port 5500");
});

/**
 * Spotify login auth route
 */
app.post("/login", (req, res) => {
	const code = req.body.code;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: process.env.REDIRECT_URI,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(400);
		});
});

//access token refresh endpoint
app.post("/refresh", (req, res) => {
	const refreshToken = req.body.refreshToken;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: process.env.REDIRECT_URI,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken,
	});

	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

// user information endpoint
app.post("/getUserInfo", (req, res) => {
	const accessToken = req.body.accessToken;
	const spotifyApi = new SpotifyWebApi({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		accessToken,
	});

	spotifyApi
		.getMe()
		.then((data) => {
			res.json({
				display_name: data.body.display_name,
				email: data.body.email,
				id: data.body.id,
				statusCode: 200,
			});
		})
		.catch((err) => {
			console.log(err)
		});
});

/// user playlist endpoint
app.post("/getUserPlaylists", (req, res) => {
	const accessToken = req.body.accessToken;
	const spotifyApi = new SpotifyWebApi({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		accessToken,
	});

	spotifyApi
		.getUserPlaylists({ limit: 20 })
		.then((data) => {
			res.json({
				userPlaylists: data.body.items,
				statusCode: 200,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

app.post("/getLofiPlaylists", (req, res) => {
	const accessToken = req.body.accessToken;
	const spotifyApi = new SpotifyWebApi({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		accessToken,
	});

	spotifyApi
		.searchPlaylists("lofi", { limit: 50 })
		.then((data) => {
			const playlists = data.body.playlists.items;
			const randomPlaylist = [];

			for (let i = 0; i < 6; i++) {
				const ele =
					playlists[Math.floor(Math.random() * playlists.length)];
				if (randomPlaylist[i - 1] !== ele) {
					randomPlaylist.push(ele);
				} else {
					i--;
				}
			}

			res.json({
				playlists: randomPlaylist,
				statusCode: 200,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});
