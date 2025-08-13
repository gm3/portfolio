import { create } from 'zustand'

const useUIStore = create((set) => ({
  projectsOpen: false,
  setProjectsOpen: (open) => set({ projectsOpen: open }),
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
}))

export default useUIStore


