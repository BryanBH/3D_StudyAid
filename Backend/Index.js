require("dotenv").config();
const express = require("express");
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

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
			console.log(err);
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

/**
 * Create playlist endpoint. first searches tracks based on artist or genre,
 *  then creates the playlist and populates it
 */
app.post("/createPlaylist", async (req, res) => {
	const accessToken = req.body.accessToken;
	const { name, description, genre, isPublic } = req.body.params;
	const spotifyApi = new SpotifyWebApi({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		accessToken,
	});

	const genres = genre.split(",");
	const playlist = [];
	const num = 10;
	if (genres.length > 3) {
		num = 7;
	}

	// look through genres/artists, search for tracks and get their uris
	for (g of genres) {
		await spotifyApi
			.searchTracks(`${g}`, { limit: `${num}` })
			.then((data) => {
				let trackItems = data.body.tracks.items;
				for (let i = 0; i < trackItems.length; i++) {
					playlist.push(trackItems[i].uri);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// O(n) in space array shuffle
	for (let i = playlist.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[playlist[i], playlist[j]] = [playlist[j], playlist[i]];
	}

	spotifyApi
		.createPlaylist(name, { description: description, public: isPublic })
		.then((data) => {
			const playlistId = data.body.id;
			return playlistId;
		})
		.then((playlistId) => {
			return spotifyApi.addTracksToPlaylist(playlistId, playlist);
		})
		.catch((err) => {
			console.log(err);
		});
});
