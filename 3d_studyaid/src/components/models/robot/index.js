import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Robot from "./Robot";
import Loader from "../Loader";

export default function index() {
	return (
		<>
			<Canvas>
				<color attach="background" args={["#ADD8E6"]} />
				<Suspense fallback={<Loader />}>
					<Robot />
				</Suspense>
			</Canvas>
		</>
	);
}
