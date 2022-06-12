import React from "react";
import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";
import Login from "../spotify/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../footer/Footer";

export default function TopSection() {
	return (
		<TopSectionContainer>
			<Logo>3D Study Aid</Logo>
			<Slogan>lorem for now </Slogan>

			<ButtonsConatiner>
				<Login />
			</ButtonsConatiner>
			<Footer />
		</TopSectionContainer>
	);
}

const TopSectionContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	/* background-color: #1756dd24; */
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 20;

	@media screen and (maxwidth: 1700px) {
	}
`;
const Logo = styled.h1`
	margin: 0;
	color: #fff;
	font-weight: 700;
	font-size: 90px;
	-webkit-text-stroke: 2px black;
	padding-top: 13%;
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
