"use client";

import { ReactNode, useRef } from "react";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("./scene"), { ssr: false });

const ThreeLayout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<any>();

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: " 100%",
        height: "100%",
        overflow: "auto",
        touchAction: "none",
      }}
    >
      {children}
      <Scene
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  );
};

export { ThreeLayout };
