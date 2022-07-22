import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../Loader";
import MedivalBook from "./Medieval_book";

export default function index() {
	return (
		<>
			<Canvas>
				<color attach="background" args={["#ADD8E6"]} />
				<Suspense fallback={<Loader />}>
					<MedivalBook />
				</Suspense>
			</Canvas>
		</>
	);
}
