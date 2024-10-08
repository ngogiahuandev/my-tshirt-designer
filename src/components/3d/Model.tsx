import { Center, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

useGLTF.preload("/models/oversized_t-shirt.glb");

export default function Model() {
  const { scene } = useLoader(GLTFLoader, "/models/oversized_t-shirt.glb");
  return (
    <Center scale={1}>
      <primitive object={scene} />
    </Center>
  );
}
