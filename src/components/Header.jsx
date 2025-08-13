import React from 'react'
import useUIStore from '../store/useUIStore.js'

export default function Header() {
  const { setProjectsOpen, menuOpen, toggleMenu, setMenuOpen } = useUIStore()
  return (
    <header className="header">
      <div className="brand">Boomboxhead Portfolio</div>
      <button className="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle menu">
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <button onClick={() => setProjectsOpen(true)}>Projects</button>
        <a href="#skills">Skills</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/gm3" target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
        </a>
        <a href="https://twitter.com/boomboxheads" target="_blank" rel="noreferrer" className="nav-icon" aria-label="Twitter">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.85-2.73 1.05A4.15 4.15 0 0 0 12 8.23c0 .33.04.66.1.97C8.28 9.03 5.1 7.3 3.01 4.64c-.36.62-.57 1.34-.57 2.11 0 1.46.75 2.74 1.89 3.49-.7-.02-1.36-.22-1.94-.53v.05c0 2.04 1.5 3.74 3.49 4.13-.36.1-.74.15-1.13.15-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.33 8.33 0 0 1 2 19.54 11.77 11.77 0 0 0 8.29 21c7.55 0 11.68-6.33 11.68-11.82 0-.18 0-.36-.01-.54.8-.59 1.5-1.33 2.05-2.17z"/></svg>
        </a>
      </nav>
    </header>
  )
}


