import React from "react";
import styled from "styled-components"

const AUTH_URL =
	"https://accounts.spotify.com/authorize?client_id=f2cd2bcf898f48cab26780d7f808d219&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
	return (
		<>
			<Button>
				<A href={AUTH_URL}>Login With Spotify</A>
			</Button>
		</>
	);
}

const Button = styled.button`
	width: 100px;
	height: 60px;
	background-color: whitesmoke;
	opacity: 0.9;
	border: 1px solid black;
	border-radius: 10px;
	text-decoration-line: none;
	color: black;
	cursor: pointer;
	&:hover {
		box-shadow: 2px 2px 2px rgba(35, 35, 35, 0.72);
	}
`;

const A = styled.a`
	text-decoration: none;
	color: black;
`;