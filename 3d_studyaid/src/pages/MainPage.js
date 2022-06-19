import React, { Suspense} from "react";
import styled from "styled-components";
// 3D model 
import { Environment, Html, useProgress, Stars} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Headphones from "../components/models/headphones/Headphones";
import Astronaut from "../components/models/astronaut/AnimatedAstronaut"
import SpotifyResults from "../components/spotify/SpotifyResults";


function MainPage({ code }) {
	return (
		<>
			<CanvasContainer>
				<SpotifyResults code={code}/>
				<Canvas>
					<Suspense fallback={<Loader />}>
						<Astronaut />
					</Suspense>
				</Canvas>
			</CanvasContainer>
		</>
	);
}

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
`;
export default MainPage;
