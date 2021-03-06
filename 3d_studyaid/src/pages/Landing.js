import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

import Headphones from "../components/models/headphones/Headphones";
import TopSection from "../components/topSection/TopSection";

function Landing() {
	return (
		<>
			<TopSection />
			<CanvasContainer>
				<Canvas>
					<Suspense fallback={<Loader />}>
						<Headphones />
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
