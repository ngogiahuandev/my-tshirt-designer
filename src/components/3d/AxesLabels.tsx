import { Text } from "@react-three/drei";

export default function AxesLabels() {
  return (
    <>
      {/* X-axis Label */}
      <Text
        position={[5.5, 0, 0]}
        rotation={[0, 0, 0]}
        fontSize={0.3}
        color="red"
        anchorX="center"
        anchorY="middle"
      >
        X
      </Text>

      {/* Y-axis Label */}
      <Text
        position={[0, 5.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        fontSize={0.3}
        color="green"
        anchorX="center"
        anchorY="middle"
      >
        Y
      </Text>

      {/* Z-axis Label */}
      <Text
        position={[0, 0, 5.5]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        fontSize={0.3}
        color="blue"
        anchorX="center"
        anchorY="middle"
      >
        Z
      </Text>
    </>
  );
}
