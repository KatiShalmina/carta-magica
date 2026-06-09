import { useCallback, useState, useEffect } from 'react'
import styles from './Header.module.scss'
import logo from '@/images/logo-full.svg'
import logoDesk from '@/images/logo-pic.svg'
import MobileMenu from './MobileMenu'
import SupportButton1 from '../button/SupportButton1'

function useActiveHash(defaultId='top') {
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

export default function Header1() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useActiveHash('top')

  const goTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <a className={styles.logo}
          href="#top"
          onClick={(e) => goTo(e, 'top')}
        >
          <picture>
            <source
              media='(min-width: 1280px)'
              srcSet={logoDesk}
            />
            <img className={styles.logoImage} src={logo} alt="Logo" />
          </picture>
          <span className={styles.logoCaption}>Carta Magica</span>
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#features"
                onClick={(e)=>goTo(e,'features')}
                aria-current={activeId === 'features' ? 'page' : undefined}
              >Features</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}
                href="#process"
                onClick={(e)=>goTo(e,'process')}
                aria-current={activeId === 'process' ? 'page' : undefined}
              >How it works</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}
                href="#release"
                onClick={(e)=>goTo(e,'release')}
                aria-current={activeId === 'release' ? 'page' : undefined}
              >On release</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}
                href="#about"
                onClick={(e)=>goTo(e,'about')}
                aria-current={activeId === 'about' ? 'page' : undefined}
              >About us</a>
            </li>
          </ul>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          ></button>
        </nav>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={goTo} />
      <SupportButton1 />
    </header>
  )
}
