import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface Props {
  particleCount: number;
  particleSize: number;
  color: string;
}

const ParticleField: React.FC<Props> = ({
  particleCount,
  particleSize,
  color,
}) => {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mount.current) {
      mount.current.appendChild(renderer.domElement);
    }

    // Add a particle system to the scene
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < positions.length; i += 3) {
      const x = Math.random() * 800 - 400;
      const y = Math.random() * 800 - 400;
      const z = Math.random() * 800 - 400;
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: particleSize,
    });
    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Add camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 500;

    // Render the scene and animate the particles
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);

      time += 0.01;
      for (let i = 0; i < positions.length; i += 3) {
        const radius = Math.sqrt(positions[i] ** 2 + positions[i + 1] ** 2);
        const angle = Math.atan2(positions[i + 1], positions[i]);
        const speed = 0.01 * (1 - radius / 400);
        positions[i] = radius * Math.cos(angle + time * speed);
        positions[i + 1] = radius * Math.sin(angle + time * speed);
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      renderer.render(scene, camera);
    }
    animate();

    // Clean up
    return () => {
      if (mount.current) {
        mount.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, [particleCount, particleSize, color]);

  return <div ref={mount} />;
};

export default ParticleField;
