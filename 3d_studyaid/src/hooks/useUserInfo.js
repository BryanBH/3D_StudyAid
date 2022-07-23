import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserInfo(accessToken) {
	const [userInfo, setUserInfo] = useState();
	useEffect(() => {
		axios
			.post("http://localhost:5500/getUserInfo", {
				accessToken,
			})
			.then((res) => {
				setUserInfo(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [accessToken]);

	return userInfo;
}
