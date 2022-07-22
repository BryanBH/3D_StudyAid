import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Mixamo from "./Mixamo";
import Loader from "../Loader";

export default function index() {
	return (
		<>
			<Canvas>
				<color attach="background" args={["Black"]} />
				<Suspense fallback={<Loader/>}>
					<Mixamo />
				</Suspense>
			</Canvas>
		</>
	);
}
