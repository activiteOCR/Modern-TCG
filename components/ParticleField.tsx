'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ElementalParticles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 3 + Math.random() * 5

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [count])

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3)
    const elementColors = [
      [0.2, 0.8, 0.4],   // Green
      [0.1, 0.7, 0.6],   // Emerald
      [0.2, 0.9, 0.8],   // Cyan
      [0.3, 0.6, 0.3],   // Forest
      [0.4, 1, 0.6],     // Lime
    ]

    for (let i = 0; i < count; i++) {
      const color = elementColors[Math.floor(Math.random() * elementColors.length)]
      colors[i * 3] = color[0]
      colors[i * 3 + 1] = color[1]
      colors[i * 3 + 2] = color[2]
    }
    return colors
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.05
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
  })

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3
      child.position.x = Math.cos(state.clock.elapsedTime * 0.3 + i * 2) * 0.2
    })
  })

  const orbs = useMemo(() => {
    const colors = ['#22c55e', '#10b981', '#06b6d4', '#34d399', '#a7f3d0']
    return colors.map((color, i) => ({
      position: [
        (i - 2) * 2,
        Math.random() * 2 - 1,
        -3 - Math.random() * 2
      ] as [number, number, number],
      color,
      scale: 0.1 + Math.random() * 0.15
    }))
  }, [])

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ElementalParticles count={1000} />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
}
