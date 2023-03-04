import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface ShpereProps {
  width: number
  height: number
}

const Shpere: React.FC<ShpereProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const renderer = new THREE.WebGLRenderer({ canvas })

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    camera.position.z = 2

    // Create the scene
    const scene = new THREE.Scene()

    // Create the geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32)

    // Create the material
    const material = new THREE.MeshStandardMaterial()
    material.metalness = 0.7
    material.roughness = 0.2
    material.color = new THREE.Color(0x000000)

    // Create the mesh
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Create the lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0xffffff, 2)
    pointLight2.position.set(-2.43, 2.32, -1.19)
    pointLight2.intensity = 20
    scene.add(pointLight2)

    // Create the orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const animate = () => {
      requestAnimationFrame(animate)

      mesh.rotation.y += 0.01
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
  }, [canvasRef])

  return <canvas ref={canvasRef} width={width} height={height} />
}

export default Shpere
