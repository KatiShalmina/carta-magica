import styles from './Footer.module.scss'
import footerLogo from '../assets/images/logo-pic.svg'
import Social from './Social'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src={footerLogo}
            alt='Logo'
          />
          <span className={styles.logoCaption}>Carta Magica</span>
        </div>
        <Social />
        <p className={styles.copyright}>© 2026 Carta Magica. All rights reserved.</p>
      </div>
    </footer>
  )
}
