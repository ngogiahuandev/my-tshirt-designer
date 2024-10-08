import React from "react";

export default function Sun() {
  return (
    <mesh position={[10, 10, 10]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        emissive="yellow"
        emissiveIntensity={1}
        color="yellow"
      />
    </mesh>
  );
}
