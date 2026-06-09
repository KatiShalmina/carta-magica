import styles from './Header.module.scss'

export default function MobileMenu({ isOpen, onClose, onNavigate }) {
  return (
    <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.mobileNavList}>
        <li className={styles.mobileNavItem}>
          <a className={styles.mobileNavLink} href="#features" onClick={(e)=>onNavigate(e,'features')}>Features</a>
        </li>
        <li className={styles.mobileNavItem}>
          <a className={styles.mobileNavLink} href="#process" onClick={(e)=>onNavigate(e,'process')}>How it works</a>
        </li>
        <li className={styles.mobileNavItem}>
          <a className={styles.mobileNavLink} href="#release" onClick={(e)=>onNavigate(e,'release')}>On release</a>
        </li>
        <li className={styles.mobileNavItem}>
          <a className={styles.mobileNavLink} href="#about" onClick={(e)=>onNavigate(e,'about')}>About us</a>
        </li>
      </ul>
      <button
        className={styles.burgerClose}
        onClick={onClose}
        aria-label="Close menu"
      ></button>
    </nav>
  )
}
