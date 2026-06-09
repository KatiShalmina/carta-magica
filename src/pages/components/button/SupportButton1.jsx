import styles from './Button.module.scss'

export default function SupportButton1() {
  return (
    <a
      className={styles.supportButton1}
      href="#support"
    >
      <span>Support us on Kickstarter</span>
    </a>
  )
}
