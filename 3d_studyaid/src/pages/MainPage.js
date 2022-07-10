import React, {  Suspense } from "react";
import useAuth from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";
export default function MainPage({ code, setAccessToken }) {
	const accessToken = useAuth(code);
	setAccessToken(accessToken);
	const navigate = useNavigate();
	return (
		<Suspense fallback={null}>
			{navigate("/results", { state: { accessToken: accessToken } })}
		</Suspense>
	);
}
