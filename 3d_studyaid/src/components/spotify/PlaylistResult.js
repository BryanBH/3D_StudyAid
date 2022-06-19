import React from "react";

export default function PlaylistResult({ playlist, choosePlaylist }) {
	function handlePlay() {
		choosePlaylist(playlist);
	}
	return (
		<>
			<div
				className=" col-sm-1 d-flex m-2 align-items-left flex-column"
				style={{ cursor: "pointer", background: "rgba(255,255,255,0)" }}
				onClick={handlePlay}>
				<img
					src={playlist.images[0].url}
					style={{ height: "64px", width: "64px" }}
					alt="Playlist Cover"
				/>
				<div>{playlist.name}</div>
			</div>
			<div className="col-sm-10"></div>
		</>
	);
}
