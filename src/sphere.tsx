import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import normalMapTexture from "./assets/Stylized_Fur_002_normal.jpg";

interface SphereProps {
  width: number;
  height: number;
}

const Sphere: React.FC<SphereProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 1.7;

    // Create the scene
    const scene = new THREE.Scene();

    // Create the geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Load the normal map texture
    const textureLoader = new THREE.TextureLoader();
    const normalMap = textureLoader.load(normalMapTexture);

    // Create the material with the normal map texture
    const material = new THREE.MeshStandardMaterial({
      metalness: 0.7,
      roughness: 0.2,
      color: new THREE.Color(0x000000),
      normalMap: normalMap, // Set the normal map texture
    });

    // Create the mesh with the new material
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create the lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 2);
    pointLight2.position.set(-2.43, 2.32, -1.19);
    pointLight2.intensity = 20;
    scene.add(pointLight2);

    const cameraLight = new THREE.PointLight(0xffffff, 0.5);
    cameraLight.intensity = 300;
    camera.add(cameraLight);
    scene.add(camera);

    // Create the orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, [canvasRef]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Sphere;
