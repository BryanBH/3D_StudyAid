import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export default function TopSection() {
	return (
		<TopSectionContainer>
			<Logo>3D Study Aid</Logo>
			<Slogan>lorem for now </Slogan>

			<ButtonsConatiner>
				<SpotifyButton>Login to Spotify</SpotifyButton>
				<SpotifyButton>
					{" "}
					<Link to="/mainPage">Lofi Beats</Link>
				</SpotifyButton>
			</ButtonsConatiner>
		</TopSectionContainer>
	);
}

const TopSectionContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 74.5%;
	top: 0;
	left: 0;
	background-color: #1756dd24;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 13%;
	z-index: 99;
`;
const Logo = styled.h1`
	margin: 0;
	color: #fff;
	font-weight: 700;
	font-size: 90px;
	-webkit-text-stroke: 2px black;
`;

const Slogan = styled.h3`
	margin: 0;
	color: #fff;
	font-weight: 700;
	font-size: 25px;
	margin-top: 10px;
	-webkit-text-stroke: 1px black;
`;

const ButtonsConatiner = styled.div`
	width: 30%;
	height: 200px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const SpotifyButton = styled.button`
	width: 100px;
	height: 60px;
	background-color: whitesmoke;
	opacity: 0.9;
	border: 1px solid black;
	border-radius: 10px;
	text-decoration-line: none;
	color: black;
`;
