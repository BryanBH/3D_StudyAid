import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Headphones from "./headphones/Headphones";
import Astronaut from "./astronaut/AnimatedAstronaut";
import { Html, useProgress, OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import MedievalBook from "./medievalBook/Medieval_book";
import Robot from "./robot/Robot"

const modelIdicies = {
	1: <Headphones />,
	2: <MedievalBook />,
	3: <Astronaut />,
	4: <Robot />,
};

function chooseModel(modelValue) {
	const model = modelIdicies[modelValue];
	return model;
}
export default function ModelRendering({ modelValue }) {
	return (
		<CanvasContainer>
			<Canvas>
				<OrbitControls />
				<color
					attach="background"
					args={modelValue === "3" ? ["black"] : ["#ADD8E6"]}
				/>
				<Suspense fallback={<Loader />}>
					{modelValue ? chooseModel(modelValue) : null}
				</Suspense>
			</Canvas>
		</CanvasContainer>
	);
}

function Loader() {
	const { progress } = useProgress();
	return (
		<Html center style={{ color: "white" }}>
			{progress} % loaded
		</Html>
	);
}
const CanvasContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
