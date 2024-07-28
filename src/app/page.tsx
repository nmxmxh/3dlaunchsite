"use client";

import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Ref, Suspense, useEffect } from "react";
import { Group } from "three";

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
  const { scene, animations } = useGLTF("/scene.gltf");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  // animations.forEach((clip) => {
  //   const action = mixer.clipAction(clip);
  //   action.play();
  // });

  // useFrame((state, delta) => {
  //   mixer.update(delta)
  // })

  console.log("ANIMATIONS>>>>>>>>>>>>>>>", animations);
  useEffect(() => {
    actions?.Run?.play();
  });

  return (
    <group position={[1.95, -0.8, -0.25]} rotation={[0, -0.5, 0]}>
      <Clone ref={ref as Ref<Group> | undefined} scale={[1, 1, 1]} object={scene} castShadow />
    </group>
  );
}

export default function Page() {
  return (
    <>
      <View orbit style={{ height: "100svh" }}>
        <Suspense fallback={null}>
          <Common />
          <Duck />
          <mesh position={[1.5, 0, 1]}>
            <boxGeometry args={[0.5, 0.5, 0.5, 36, 36]} />
            <meshBasicMaterial wireframe color="red" />
          </mesh>
        </Suspense>
      </View>
    </>
  );
}
