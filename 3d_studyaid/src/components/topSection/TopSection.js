import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Login from "../spotify/Login";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TopSection() {
	return (
		<TopSectionContainer>
			<Logo>3D Study Aid</Logo>
			<br>
			</br>
			<br>
			</br>
			<br>
			</br>
			{/* <ButtonsConatiner>
				<Login />
			</ButtonsConatiner> */}
			<FooterWrapper>
				<NavMenu>
					<NavLink to="about" activestyle="true">
						About Us
					</NavLink>
					<Login />
					<NavLink to="contactUs" activestyle="true">
						Contact Us
					</NavLink>
					
				</NavMenu>
			</FooterWrapper>
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
const FooterWrapper = styled.footer`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	z-index: 30;
	/* background-color: #a9a9a9; */
`;

const NavLink = styled(Link)`
	width: 100px;
	height: 40px;
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
	text-align: center;
`;

const NavMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #256ce1;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
