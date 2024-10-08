"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/3d/Model";
import {
  OrbitControls,
  useProgress,
  Html,
  Environment,
  Bounds,
} from "@react-three/drei";
import { AxesHelper } from "three";
import AxesLabels from "@/components/3d/AxesLabels";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html className="w-screen h-screen flex items-center justify-center">
      {progress} % loaded
    </Html>
  );
}

export default function Scence() {
  return (
    <Canvas gl={{ antialias: true }} camera={{ position: [0, 0, 5], fov: 60 }}>
      <Environment preset="city" />
      <Suspense fallback={<Loader />}>
        <Bounds fit clip observe margin={1.5}>
          <Model />
        </Bounds>
      </Suspense>
      <OrbitControls />
      <AxesLabels />
      <primitive object={new AxesHelper(5)} />
    </Canvas>
  );
}
