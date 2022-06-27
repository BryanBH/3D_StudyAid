import React from "react";
const imgTest =
	"https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72";

export default function PlaylistResult({ playlist, choosePlaylist }) {
	function handlePlay() {
		choosePlaylist(playlist);
	}
	return (
		<>
			<div
				className="d-flex m-2 align-items-center flex-column text-center"
				style={{ cursor: "pointer", overflowY: "auto" }}
				onClick={handlePlay}>
				<img
					src={playlist.images[0]?playlist.images[0].url: imgTest}
					style={{ height: "94px", width: "94px" }}
					alt="Playlist Cover"
				/>
				<div>{playlist.name}</div>
			</div>
		</>
	);
}
