import React from "react";

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
					src={playlist.images[0].url}
					style={{ height: "94px", width: "94px" }}
					alt="Playlist Cover"
				/>
				<div>{playlist.name}</div>
			</div>
		</>
	);
}
