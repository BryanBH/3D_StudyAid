import React from 'react'
import { Stars } from '@react-three/drei'
import AstronautModel from "./AnimatedAstronaut"

export default function Astronaut() {
  return (
		<>
			<Stars
				radius={300}
				depth={60}
				count={20000}
				factor={7}
				fade={true}
			/>
			<AstronautModel />
		</>
  );
}
