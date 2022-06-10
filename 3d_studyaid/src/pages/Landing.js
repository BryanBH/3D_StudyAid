import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Html, useProgress } from "@react-three/drei";

import Headphones from "../components/headphones/Headphones";
import TopSection from "../components/topSection/TopSection";
import hdr from "../images/brown_photostudio_02_4k.hdr"
function Landing() {


	return (
		<>
			<TopSection />
			<CanvasContainer>
				<Canvas>
					<Suspense fallback={<Loader />}>
						<Headphones />
						<Environment files={hdr} background />
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
`;
export default Landing;
