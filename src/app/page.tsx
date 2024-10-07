"use client";

import { Clone, useGLTF } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Ref, Suspense, useEffect, useRef } from "react";
import { Clock, Group } from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const View = dynamic(() => import("@/components/r3f/view").then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ),
});
const Common = dynamic(() => import("@/components/r3f/view").then((mod) => mod.Common), { ssr: false });

function Duck() {
  const { scene } = useGLTF("/scene.gltf");

  return (
    <group position={[1.95, -1.75, -0.25]} rotation={[0, -0.5, 0]}>
      <Clone scale={[2, 2, 2]} object={scene} castShadow />
    </group>
  );
}

function Cube() {
  const cubeRef = useRef<any>(null!);
  const clock = new Clock();

  useFrame(() => {
    if (cubeRef.current) {
      const elapsedTime = clock.getElapsedTime();
      cubeRef.current.rotation.y = Math.sin(elapsedTime);
    }
  });

  return (
    <mesh ref={cubeRef} position={[1.5, 0, 1]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
}
export default function Page() {
  return (
    <>
      <View orbit style={{ height: "100svh" }}>
        <Suspense fallback={null}>
          <Common />
          <Duck />
          <Cube />
        </Suspense>
      </View>
    </>
  );
}
