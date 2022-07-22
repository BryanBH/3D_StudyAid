import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Astronaut from "./astronaut";
import styled from "styled-components";
import MedievalBook from "./medievalBook";
import Robot from "./robot";
import RP from "./RP";
import Mixamo from "./mixamo";

const modelIndicies = [
	{ model: <MedievalBook /> },
	{ model: <Astronaut /> },
	// { model: <Mixamo /> },
	{ model: <Robot /> },
	{ model: <RP /> },
];

function chooseModel(modelValue) {
	const model = modelIndicies[modelValue].model;

	return model;
}
export default function ModelRendering({ modelValue }) {
	return (
		<CanvasContainer>
			{modelValue ? chooseModel(modelValue) : null}
		</CanvasContainer>
	);
}

const CanvasContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
