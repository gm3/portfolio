import React, { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

function WireframeTorus({ position = [0, 0, 0], rotationSpeed = 0.2 }) {
  const torusRef = React.useRef()
  useFrame((state, delta) => {
    if (!torusRef.current) return
    torusRef.current.rotation.x += delta * rotationSpeed
    torusRef.current.rotation.y += delta * rotationSpeed * 0.7
  })
  return (
    <mesh ref={torusRef} position={position}>
      <torusKnotGeometry args={[1, 0.25, 128, 32]} />
      <meshBasicMaterial color="#0a0a0a" wireframe />
    </mesh>
  )
}

function FloatingIcosa({ position = [0, 0, 0], index = 0 }) {
  const ref = React.useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() + index
    ref.current.position.y = position[1] + Math.sin(t) * 0.25
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.4
  })
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.5, 0]} />
      <meshBasicMaterial color="#0a0a0a" wireframe />
    </mesh>
  )
}

export default function Scene() {
  const group = React.useRef()
  const scroll = useScroll()

  useFrame((state) => {
    const r = scroll.offset // 0..1
    if (!group.current) return
    group.current.position.z = -r * 10
    group.current.rotation.y = r * Math.PI * 2
    state.camera.position.x = Math.sin(r * Math.PI * 2) * 1.2
    state.camera.position.y = Math.cos(r * Math.PI) * 0.5
    state.camera.lookAt(0, 0, 0)
  })

  const icosaPositions = useMemo(() => {
    const arr = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      arr.push([Math.cos(angle) * 3, (i % 3) - 1, Math.sin(angle) * 3])
    }
    return arr
  }, [])

  return (
    <group ref={group}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      <WireframeTorus position={[0, 0, 0]} />
      {icosaPositions.map((p, i) => (
        <FloatingIcosa key={i} position={p} index={i} />
      ))}

      {/* VRM avatar temporarily removed */}
    </group>
  )
}


