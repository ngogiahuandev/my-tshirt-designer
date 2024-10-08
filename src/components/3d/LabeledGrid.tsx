import React from "react";
import { Line, Text } from "@react-three/drei";

export default function LabeledGrid({
  size = 10,
  divisions = 10,
  color = "gray",
}) {
  const lines = [];
  const labels = [];
  const step = size / divisions;
  const halfSize = size / 2;

  // Create grid lines and labels
  for (let i = -halfSize; i <= halfSize; i += step) {
    // Skip creating a line at the origin to prevent overlap
    const isMainAxis = i === 0;

    // Lines parallel to Z-axis (along X-axis)
    lines.push(
      <Line
        key={`line-x-${i}`}
        points={[
          [i, 0, -halfSize],
          [i, 0, halfSize],
        ]}
        color={isMainAxis ? "red" : color}
        lineWidth={isMainAxis ? 2 : 1}
      />
    );

    // Lines parallel to X-axis (along Z-axis)
    lines.push(
      <Line
        key={`line-z-${i}`}
        points={[
          [-halfSize, 0, i],
          [halfSize, 0, i],
        ]}
        color={isMainAxis ? "blue" : color}
        lineWidth={isMainAxis ? 2 : 1}
      />
    );

    // Labels along X-axis
    if (i !== 0) {
      labels.push(
        <Text
          key={`label-x-${i}`}
          position={[i, 0.01, -halfSize - 0.2]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.2}
          color="red"
        >
          {i.toFixed(1)}
        </Text>
      );
    }

    // Labels along Z-axis
    if (i !== 0) {
      labels.push(
        <Text
          key={`label-z-${i}`}
          position={[-halfSize - 0.2, 0.01, i]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          fontSize={0.2}
          color="blue"
        >
          {i.toFixed(1)}
        </Text>
      );
    }
  }

  return (
    <>
      {lines}
      {labels}
    </>
  );
}
