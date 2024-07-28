"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Sphere } from "@react-three/drei";
import { r3f } from "../helpers/global";
import * as THREE from "three";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <Sphere />
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
