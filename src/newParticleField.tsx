import React, { Component } from "react";
import * as THREE from "three";

interface Props {}
interface State {
  scene: THREE.Scene;
}

class NewParticleField extends Component<Props, State> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private particleSystem!: THREE.Points;

  constructor(props: Props) {
    super(props);

    const scene = new THREE.Scene();

    this.canvasRef = React.createRef<HTMLCanvasElement>();
    this.state = {
      scene,
    };
  }

  componentDidMount() {
    // Create a new renderer and add it to the DOM
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.current!,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a new camera and add it to the scene
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 500;
    this.state.scene.add(this.camera);

    // Create a new particle system and add it to the scene
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;

    // Set up the vertices array
    const vertices = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 1000 - 500;
      const y = Math.random() * 1000 - 500;
      const z = Math.random() * 1000 - 500;

      vertices[i * 3] = x;
      vertices[i * 3 + 1] = y;
      vertices[i * 3 + 2] = z;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    this.particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    this.state.scene.add(this.particleSystem);

    // Start the animation loop
    this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    // Update the position of the particles
    const particleGeometry = this.particleSystem
      .geometry as THREE.BufferGeometry;
    const positionAttribute = particleGeometry.getAttribute("position");

    // Cast the attribute to the correct type to access the `array` property
    const vertices = (positionAttribute as THREE.BufferAttribute)
      .array as Float32Array;

    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 1] -= 1;

      if (vertices[i + 1] < -500) {
        vertices[i + 1] = 500;
      }
    }

    positionAttribute.needsUpdate = true;

    // Render the scene
    this.renderer.render(this.state.scene, this.camera);
  };

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default NewParticleField;
