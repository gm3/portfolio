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
  const [pages, setPages] = React.useState(6)

  React.useLayoutEffect(() => {
    const calcPages = () => {
      const sections = Array.from(document.querySelectorAll('.section'))
      const total = sections.reduce((sum, el) => sum + Math.max(el.offsetHeight || 0, window.innerHeight), 0)
      const p = Math.max(1, Math.ceil(total / window.innerHeight))
      setPages(p)
    }
    // Delay until first paint of html overlay
    requestAnimationFrame(calcPages)
    window.addEventListener('resize', calcPages)
    return () => window.removeEventListener('resize', calcPages)
  }, [])
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


