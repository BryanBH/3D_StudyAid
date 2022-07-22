import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import RP from "./RP";
import Loader from "../Loader";

export default function index() {
	return (
		<>
			<Canvas>
				<color attach="background" args={["#702963"]} />
				<Suspense fallback={<Loader />}>
					<RP />
				</Suspense>
			</Canvas>
		</>
	);
}
