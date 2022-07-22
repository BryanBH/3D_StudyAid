/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Pixel (https://sketchfab.com/stefan.lengyel1)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/medieval-fantasy-book-06d5a80a04fc4c5ab552759e9a97d91a
title: Medieval Fantasy Book
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/medieval_book.gltf");
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions["The Life"].play();
	});
	return (
		<>
			<ambientLight intensity={0.6} />
			<group
				ref={group}
				{...props}
				dispose={null}
				position ={[.3,0,.2]}
				scale={0.08}
				rotation={[0.3, 0, 0.0]}>
				<group name="Sketchfab_Scene">
					<group
						name="Sketchfab_model"
						rotation={[-Math.PI / 2, 0, 0]}>
						<group
							name="dad255dd2cf24ae0bb357684e49722b4fbx"
							rotation={[Math.PI / 2, 0, 0]}>
							<group name="Object_2">
								<group name="RootNode">
									<group
										name="flag"
										position={[-11.51, 12.5, -6.75]}
										rotation={[
											-Math.PI / 2,
											0,
											-Math.PI / 6,
										]}>
										<group
											name="Object_17"
											position={[-7.26, 9.04, -8.16]}>
											<mesh
												name="0"
												geometry={nodes["0"].geometry}
												material={
													materials["Texture-base"]
												}
												morphTargetDictionary={
													nodes["0"]
														.morphTargetDictionary
												}
												morphTargetInfluences={
													nodes["0"]
														.morphTargetInfluences
												}
											/>
										</group>
									</group>
									<group
										name="flag-second"
										position={[-11.49, 12.55, -26.24]}
										rotation={[-Math.PI / 2, 0, 0]}>
										<group
											name="Object_20"
											position={[-7.26, 9.04, -8.16]}>
											<mesh
												name="1"
												geometry={nodes["1"].geometry}
												material={
													materials["Texture-base"]
												}
												morphTargetDictionary={
													nodes["1"]
														.morphTargetDictionary
												}
												morphTargetInfluences={
													nodes["1"]
														.morphTargetInfluences
												}
											/>
										</group>
									</group>
									<group
										name="Scene"
										position={[-4.79, 0, 0.28]}
										rotation={[-Math.PI / 2, 0, 0]}>
										<group
											name="Mill-wind-wheel"
											position={[-35.78, -27.19, 3.89]}
											rotation={[0.45, -0.45, -0.5]}>
											<group
												name="Object_11"
												position={[
													-8.25, 39.88, -25.75,
												]}
												rotation={[-0.61, 0.14, 0.64]}>
												<mesh
													name="Mill-wind-wheel_Texture-base_0"
													geometry={
														nodes[
															"Mill-wind-wheel_Texture-base_0"
														].geometry
													}
													material={
														materials[
															"Texture-base"
														]
													}
												/>
											</group>
										</group>
										<group
											name="Mill-water-wheel"
											position={[3.71, -15.4, -0.44]}
											rotation={[-1.92, 0, 0]}>
											<group
												name="Object_14"
												position={[
													-17.71, 31.18, 4.78,
												]}>
												<mesh
													name="Mill-water-wheel_Texture-base_0"
													geometry={
														nodes[
															"Mill-water-wheel_Texture-base_0"
														].geometry
													}
													material={
														materials[
															"Texture-base"
														]
													}
												/>
											</group>
										</group>
										<group
											name="Object_5"
											position={[-14, 15.79, 4.34]}>
											<mesh
												name="Scene_Texture-base_0"
												geometry={
													nodes[
														"Scene_Texture-base_0"
													].geometry
												}
												material={
													materials["Texture-base"]
												}
											/>
											<mesh
												name="Scene_Texture-base_0_1"
												geometry={
													nodes[
														"Scene_Texture-base_0_1"
													].geometry
												}
												material={
													materials["Texture-base"]
												}
											/>
											<mesh
												name="Scene_Texture-base-gloss-jpg_0"
												geometry={
													nodes[
														"Scene_Texture-base-gloss-jpg_0"
													].geometry
												}
												material={
													materials[
														"Texture-base-gloss-jpg"
													]
												}
											/>
											<mesh
												name="Scene_Book-tittle_0"
												geometry={
													nodes["Scene_Book-tittle_0"]
														.geometry
												}
												material={
													materials["Book-tittle"]
												}
											/>
										</group>
									</group>
									<group
										name="Waterfall"
										position={[-4.79, 0, 0.35]}
										rotation={[-Math.PI / 2, 0, 0]}>
										<group
											name="Object_23"
											position={[-14, 15.79, 4.34]}>
											<mesh
												name="Waterfall_Texture-base-gloss-jpg_0"
												geometry={
													nodes[
														"Waterfall_Texture-base-gloss-jpg_0"
													].geometry
												}
												material={
													materials[
														"Texture-base-gloss-jpg"
													]
												}
											/>
										</group>
									</group>
									<group
										name="deers"
										position={[-23.12, -0.05, 14.88]}
										rotation={[-Math.PI / 2, 0, 0]}>
										<group
											name="Object_26"
											position={[4.33, 30.39, 4.39]}>
											<mesh
												name="deers_Texture-base_0"
												geometry={
													nodes[
														"deers_Texture-base_0"
													].geometry
												}
												material={
													materials["Texture-base"]
												}
											/>
										</group>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</>
	);
}

useGLTF.preload("/medieval_book.gltf");
