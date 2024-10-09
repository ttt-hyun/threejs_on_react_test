/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import React, { useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import * as THREE from 'three'; // THREE 모듈 import

export function Hood_normal(props) {
    const { nodes, materials } = useGLTF('./models/hood_normal.glb')

    const texture = useTexture("/textures/wawa.png");
    // useControls({
    //     angle: {
    //         min: degToRad(60),
    //         max: degToRad(300),
    //         value: Math.PI / 4,
    //         step: 0.01,
    //         onChange: (value) => {
    //             const x = Math.cos(value);
    //             const z = Math.sin(value);
    //             const rot = Math.atan2(x, z);
    //             setRotation(() => [0, rot, 0]);
    //             setPos((pos) => [x, pos[1], z]);
    //         },
    //     },
    //     posY: {
    //         min: 0,
    //         max: 3,
    //         value: 1.8,
    //         step: 0.01,
    //         onChange: (value) => {
    //             setPos((pos) => [pos[0], value, pos[2]]);
    //         },
    //     },
    //     scale: {
    //         min: 0.5,
    //         max: 3,
    //         value: 1.5,
    //         step: 0.01,
    //         onChange: (value) => {
    //             setScale(() => [value, value, 1.5]);
    //         },
    //     },
    // });

    const [pos, setPos] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState([1.5, 1.5, 1.5]);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.hood_normal.geometry}
                material={materials.front}
            >
                {/* <meshBasicMaterial transparent opacity={1} /> */}
                <Decal
                    debug // Makes "bounding box" of the decal visible
                    position={[0, 0, 0.4]} // Position of the decal
                    rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
                    scale={[0.5, 0.5, 0.5]} // Scale of the decal
                >
                    <meshBasicMaterial
                        map={texture}
                        // toneMapped={false}
                        // transparent
                        polygonOffset
                        polygonOffsetFactor={-1} // The mesh should take precedence over the original
                    />
                </Decal>
            </mesh>
        </group>
    )
}

useGLTF.preload('./models/hood_normal.glb')