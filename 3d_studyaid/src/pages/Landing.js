import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Html, useProgress } from "@react-three/drei";

import Headphones from "../components/headphones/Headphones";
import TopSection from "../components/topSection/TopSection";
import Footer from "../components/footer/Footer";
function Landing() {
	return (
		<>
			<TopSection />
			<CanvasContainer>
				<Canvas>
					<Suspense fallback={<Loader />}>
						<Headphones />
						<Environment preset="sunset" background />
					</Suspense>
				</Canvas>
			</CanvasContainer>
			<Footer />
		</>
	);
}

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}
const CanvasContainer = styled.div`
	width: 100%;
	height: 95%;
`;
export default Landing;
