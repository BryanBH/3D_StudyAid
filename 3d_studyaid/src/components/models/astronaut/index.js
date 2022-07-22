import React, { Suspense } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";
import AstronautModel from "./AnimatedAstronaut";

export default function index() {
	return (
		<>
			<Canvas>
				<color attach="background" args={["Black"]} />
				<Stars
					radius={300}
					depth={60}
					count={20000}
					factor={7}
					fade={true}
				/>
				<Suspense fallback={<Loader />}>
					<AstronautModel />
				</Suspense>
			</Canvas>
		</>
	);
}
