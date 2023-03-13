import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const ColorGradientScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
      meshRef.current.rotation.z = Math.sin(time / 3);
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <mesh ref={meshRef}>
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        {React.Children.map(
          [
            <meshStandardMaterial color={new THREE.Color("#ff0000")} />,
            <meshStandardMaterial color={new THREE.Color("#00ff00")} />,
            <meshStandardMaterial color={new THREE.Color("#0000ff")} />,
            <meshStandardMaterial color={new THREE.Color("#ffff00")} />,
          ],
          (child) => React.cloneElement(child, { attachArray: "material" })
        )}
      </mesh>
    </Canvas>
  );
};

export default ColorGradientScene;
