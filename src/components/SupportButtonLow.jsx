import styles from './Button.module.scss'

export default function SupportButtonLow() {
  return (
    <a
      className={styles.supportButtonLow}
      href="#support"
    >
      <span>Support us on Kickstarter!</span>
    </a>
  )
}
