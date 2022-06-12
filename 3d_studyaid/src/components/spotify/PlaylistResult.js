import React from "react";

export default function PlaylistResult({ playlist, choosePlaylist }) {
	function handlePlay() {
		choosePlaylist(playlist);
	}
	return (
		<div
			className="d-flex m-2 align-items-center"
			style={{ cursor: "pointer" }}
			onClick={handlePlay}>
			<img
				src={playlist.images[0].url}
				style={{ height: "64px", width: "64px" }}
				alt="Playlist Cover"
			/>
			<div className="ml-3" style={{ border: "1px solid black" }}>
				<div>{playlist.name}</div>
				<div className="text-muted">{playlist.description}</div>
			</div>
		</div>
	);
}
