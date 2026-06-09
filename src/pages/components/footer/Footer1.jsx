import styles from './Footer.module.scss'
import footerLogo from '@/images/logo-pic.svg'
import Social1 from '../social/Social1'

export default function Footer1() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUnitWrapper}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={footerLogo} alt="Logo" width={40} height={40} />
          <span className={styles.logoCaption}>Carta Magica</span>
        </div>
        <Social1 />
      </div>
      <p className={styles.copyright}>© 2025 Carta Magica. All rights reserved.</p>
    </footer>
  )
}
