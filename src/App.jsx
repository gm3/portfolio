import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import Scene from './components/Scene.jsx'
import Header from './components/Header.jsx'
import Sections from './components/Sections.jsx'
import ProjectsModal from './components/ProjectsModal.jsx'
import useUIStore from './store/useUIStore.js'

export default function App() {
  const { projectsOpen } = useUIStore()
  const pages = 6
  return (
    <div className="app">
      <Header />
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <color attach="background" args={[1, 1, 1]} />
        <fog attach="fog" args={[0xffffff, 10, 30]} />
        <ScrollControls pages={pages} damping={0.25}>
          <Scene />
          <Scroll html>
            <Sections />
          </Scroll>
        </ScrollControls>
      </Canvas>
      {projectsOpen && <ProjectsModal />}
    </div>
  )
}


