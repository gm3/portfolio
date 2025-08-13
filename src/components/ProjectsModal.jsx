import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useUIStore from '../store/useUIStore.js'

const projects = [
  {
    title: 'Boom Tools',
    description: 'Unity tool for weighted layer randomization, VRM export (uniVRM), posed GLB, and ERC metadata batching.',
    github: 'https://github.com/gm3/boom-tools',
    wiki: 'https://github.com/gm3/boom-tools/wiki',
    toybox: 'https://github.com/gm3/vrm-toybox/',
    images: [
      'https://hackmd.io/_uploads/B1OQ1-5l2.png',
      'https://hackmd.io/_uploads/S1umy-5x3.png',
      'https://hackmd.io/_uploads/rJtQ1-cl3.png',
    ],
    details: [
      'Weighted layer randomizer: configure values/weights per layer and generate consistent JSON metadata',
      'Exports: VRM (via UniVRM), posed GLB, preview image, and ERC JSON (with image, animation_url, vrm_url)',
      'Batch pipelines: run N randomized exports with one config; or single export and JSON-only modes',
      'JSON import: load batches of layer data to compose 2D projects into 3D VRMs and re-output updated JSON',
      'Extensible randomization: sample scripts for randomized materials (e.g., background/body) across meshes',
      'Unity editor UX: layer setup UI with arrays of referenced objects and string-mapped trait data',
      'Interoperability: VRM is a GLTF extension; assets can be used across metaverse apps supporting VRM',
      'Open ethos: CC0-1.0; aligned with Open Metaverse principles and public collaboration',
      'Tech stack: Unity 2021.3.x, UniVRM, JSON pipelines; version v0.0.1-alpha',
    ],
  },
  {
    title: 'AI News Automation',
    description: 'AI-powered 3D news show system that turns updates from GitHub/Discord/Twitter into VRM-hosted video episodes.',
    website: 'https://elizaos.news/',
    video: 'https://www.youtube.com/embed/oI03UxgQWBU',
    details: [
      'Unity 2022.3.53f1 with VRM avatar support (lip sync, emotions, IK)',
      'Automated pipeline: aggregates sources and generates show episodes',
      'Event-driven architecture: ShowRunner, EventProcessor, ScenePreparationManager',
      'Effects System with glitch/particle/visual enhancements',
      'Multi-language pipeline and automated publishing to YouTube/social',
      'Outputs video + transcript; episodic JSON under Resources/Episodes',
    ],
  },
  {
    title: 'Virtual Production in VR',
    description: 'Real-time virtual production tools and previs in VR.',
    video: 'https://www.youtube.com/embed/-i2ru6Ow6Sg',
  },
  {
    title: 'Music Portfolio',
    description: 'Songs and scores for MTV, Cartoon Network, VH1, BET, HBO, and more.',
    github: 'https://github.com/gm3/music',
    details: [
      'MTV',
      'Cartoon Network',
      'VH1',
      'BET',
      'HBO',
      'ESPN',
      'Telemundo',
      'E!',
      'NBC',
      'ABC',
      'CBS',
      'FOX',
      'Discovery',
      
      'Nickelodeon',
      'Comedy Central',
      'Adult Swim',
      'TNT',
      'TBS',
      'Syfy',
      'National Geographic',
      'A&E',
      'History',
      // removed by request
      'PBS',
      
      // removed by request
      'And Many More',
    ],
  },
]

export default function ProjectsModal() {
  const { projectsOpen, setProjectsOpen } = useUIStore()
  const [activeIndex, setActiveIndex] = React.useState(0)
  const active = projects[activeIndex]

  return (
    <AnimatePresence>
      {projectsOpen && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="modal" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
            <div className="modal-header">
              <h2>Projects</h2>
              <button className="wire-btn" onClick={() => setProjectsOpen(false)}>Close</button>
            </div>
            <div className="modal-body">
              <aside className="project-list">
                {projects.map((p, i) => (
                  <button key={p.title} className={`project-item ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)}>
                    {p.title}
                  </button>
                ))}
              </aside>
              <div className="project-view">
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                {(active.github || active.website) && (
                  <div className="icon-row">
                    {active.github && (
                      <a href={active.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
                      </a>
                    )}
                    {active.website && (
                      <a href={active.website} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Website">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-3.17c-.41-1.62-1.04-2.98-1.83-3.86A8.03 8.03 0 0 1 18.93 8zM12 4c.86.77 1.66 2.34 2.12 4H9.88C10.34 6.34 11.14 4.77 12 4zm-3.93.14C7.28 5.02 6.65 6.38 6.24 8H3.07a8.03 8.03 0 0 1 5-3.86zM4 12c0-.69.07-1.36.2-2h3.36a21.9 21.9 0 0 0 0 4H4.2c-.13-.64-.2-1.31-.2-2zm.93 6h3.17c.41 1.62 1.04 2.98 1.83 3.86A8.03 8.03 0 0 1 4.93 18zM12 20c-.86-.77-1.66-2.34-2.12-4h4.24C13.66 17.66 12.86 19.23 12 20zm3.93-.14c.79-.88 1.42-2.24 1.83-3.86h3.17a8.03 8.03 0 0 1-5 3.86zM19.8 14h-3.36a21.9 21.9 0 0 0 0-4h3.36c.13.64.2 1.31.2 2s-.07 1.36-.2 2zM8.12 14h7.76a19.5 19.5 0 0 1-1.76 4H9.88a19.5 19.5 0 0 1-1.76-4zm0-4h7.76a19.5 19.5 0 0 1 1.76-4H9.88a19.5 19.5 0 0 1-1.76 4z"/></svg>
                      </a>
                    )}
                  </div>
                )}
                {active.images && active.images.length > 0 && (
                  <div className="project-gallery">
                    {active.images.map((src, i) => (
                      <img key={i} src={src} alt={`${active.title} ${i+1}`} />
                    ))}
                  </div>
                )}
                {active.details && active.details.length > 0 && (
                  <ul>
                    {active.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {active.video && (
                  <div className="video-wrap">
                    <iframe
                      width="560"
                      height="315"
                      src={active.video}
                      title={active.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


