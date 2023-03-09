import * as THREE from "three";

class ExtendedScene extends THREE.Scene {
  dispose() {
    this.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        object.material.dispose();
      }
    });
  }
}

const scene = new ExtendedScene();