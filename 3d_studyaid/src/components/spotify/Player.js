import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
/**
 *
 * @param {accessToken} accessToken user's spotify access token
 * @param {playlistUri} playlistUri Playlist uri
 * @returns A Spotify web playback component that will automatically play the given playlist
 */
export default function Player({ accessToken, playlistUri }) {
	const [play, setPlay] = useState(false);

	useEffect(() => setPlay(true), [playlistUri]);

	if (!accessToken) return null;
	return (
		<SpotifyPlayer
			token={accessToken}
			showSaveIcon
			play={play}
			callback={(state) => {
				if (!state.isPlaying) setPlay(false);
			}}
			uris={playlistUri ? [playlistUri] : []}
		/>
	);
}
