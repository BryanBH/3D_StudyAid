import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<FooterWrapper>
				<NavMenu>
					<NavLink to="about" activestyle="true">
						About Us
					</NavLink>
					<NavLink to="contactUs" activestyle="true">
						Contact Us
					</NavLink>
				</NavMenu>
			</FooterWrapper>
		</>
	);
}

const FooterWrapper = styled.footer`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	z-index: 30;
	/* background-color: #a9a9a9; */
`;

const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
	font-size: 20px;
	color: black;
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
export default Footer;
