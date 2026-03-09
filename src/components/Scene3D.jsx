import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, geometry, color, speed = 1, distort = 0.3, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
      meshRef.current.rotation.y += 0.003 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={distort}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 80 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  const pointsRef = useRef()

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6c5ce7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <pointLight position={[-5, -5, -5]} intensity={0.2} color="#a29bfe" />

      <FloatingShape
        position={[-3.5, 1.5, -2]}
        geometry={<icosahedronGeometry args={[1.2, 1]} />}
        color="#6c5ce7"
        speed={0.8}
        scale={1.2}
      />

      <FloatingShape
        position={[3.5, -1, -3]}
        geometry={<torusKnotGeometry args={[0.8, 0.25, 80, 16]} />}
        color="#00cec9"
        speed={0.6}
        distort={0.2}
      />

      <FloatingShape
        position={[-2, -2.5, -1]}
        geometry={<octahedronGeometry args={[0.9, 0]} />}
        color="#fd79a8"
        speed={1.2}
        scale={0.9}
      />

      <FloatingShape
        position={[2.5, 2.5, -4]}
        geometry={<dodecahedronGeometry args={[0.7, 0]} />}
        color="#a29bfe"
        speed={0.5}
        distort={0.4}
        scale={0.8}
      />

      <FloatingShape
        position={[0, -3, -5]}
        geometry={<torusGeometry args={[1, 0.3, 16, 32]} />}
        color="#6c5ce7"
        speed={0.4}
        distort={0.15}
        scale={0.7}
      />

      <Particles count={80} />
    </Canvas>
  )
}
