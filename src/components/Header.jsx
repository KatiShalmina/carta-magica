import { useCallback, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import logo from '../assets/images/logo-full.svg'
import logoDesk from '../assets/images/logo-pic.svg'
import MobileMenu from './MobileMenu'
import SupportButtonHigh from './SupportButtonHigh'

const navItems = [
  { id: 'features', label: 'Features' },
  { id: 'process', label: 'How it works' },
  { id: 'release', label: 'On release' },
  { id: 'about', label: 'About us' },
]

function useActiveHash(defaultId = 'top') {
  const getId = useCallback(() => {
    if (typeof window === 'undefined') return defaultId
    return window.location.hash ? window.location.hash.slice(1) : defaultId
  }, [defaultId])

  const [activeId, setActiveId] = useState(() => getId())

  useEffect(() => {
    const onHash = () => setActiveId(getId())

    window.addEventListener('hashchange', onHash)

    return () => window.removeEventListener('hashchange', onHash)
  }, [getId])

  return [activeId, setActiveId]
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useActiveHash('top')

  const updateUrl = useCallback(id => {
    const nextUrl = id === 'top'
      ? window.location.pathname
      : `#${id}`

    history.replaceState(null, '', nextUrl)
  }, [])

  const goTo = useCallback((e, id) => {
    e.preventDefault()

    const el = document.getElementById(id)

    if (!el) return

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    updateUrl(id)
    setActiveId(id)
    setMenuOpen(false)
  }, [setActiveId, updateUrl])

  useEffect(() => {
    const ids = ['top', ...navItems.map(item => item.id)]

    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return

        const id = visible.target.id

        setActiveId(id)
        updateUrl(id)
      },
      {
        root: null,
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [setActiveId, updateUrl])

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <a
          className={styles.logo}
          href='#top'
          onClick={e => goTo(e, 'top')}
        >
          <picture>
            <source
              media='(min-width: 1280px)'
              srcSet={logoDesk}
            />
            <img
              className={styles.logoImage}
              src={logo}
              alt='Carta Magica logo'
            />
          </picture>

          <span className={styles.logoCaption}>Carta Magica</span>
        </a>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li className={styles.navItem} key={item.id}>
                <a
                  className={styles.navLink}
                  href={`#${item.id}`}
                  onClick={e => goTo(e, item.id)}
                  aria-current={activeId === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={styles.burger}
            type='button'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
          />
        </nav>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={goTo}
      />

      <SupportButtonHigh />
    </header>
  )
}
