const express = require("express");
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5500, () => {
	console.log("Listening on port 5000");
});

/**
 * Spotify login auth route
 */
app.post("/login", (req, res) => {
	const code = req.body.code;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000",
		clientId: "f2cd2bcf898f48cab26780d7f808d219",
		clientSecret: "ae9d29d0ff1f4d2ebec546acb68fd2d8",
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
		redirectUri: "http://localhost:3000",
		clientId: "f2cd2bcf898f48cab26780d7f808d219",
		clientSecret: "ae9d29d0ff1f4d2ebec546acb68fd2d8",
		refreshToken,
	});

	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				expiresIn: data.body.expiresIn,
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
		clientId: "f2cd2bcf898f48cab26780d7f808d219",
		clientSecret: "ae9d29d0ff1f4d2ebec546acb68fd2d8",
		accessToken,
	});

	spotifyApi
		.getMe()
		.then((data) => {
			res.json({
				userInfo: data.body,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

/// user playlist endpoint 
app.post("/getUserPlaylists", (req, res) => {
	const accessToken = req.body.accessToken;
	// console.log(accessToken)
	const spotifyApi = new SpotifyWebApi({
		clientId: "f2cd2bcf898f48cab26780d7f808d219",
		clientSecret: "ae9d29d0ff1f4d2ebec546acb68fd2d8",
		accessToken,
	});

	spotifyApi.getUserPlaylists({limit:20}).then((data) => {
		res.json({
			userPlaylists: data.body,
		});
	});
});
