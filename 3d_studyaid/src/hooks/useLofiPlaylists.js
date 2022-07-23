import axios from "axios";
import { useState, useEffect } from "react";
export default function useLofiPlaylists(accessToken) {
	const [lofiPlaylists, setLofiPlaylists] = useState([]);

	useEffect(() => {
		axios
			.post("http://localhost:5500/getLofiPlaylists", {
				accessToken,
			})
			.then((res) => {
				setLofiPlaylists(res.data.playlists);
				// console.log(res.data.playlists);
			});
	}, [accessToken]);
	return lofiPlaylists;
}
