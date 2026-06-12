import styles from './Button.module.scss'

export default function SupportButtonLow() {
  return (
    <a
      className={styles.supportButtonLow}
      href='https://kickstarter.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>Support us on Kickstarter!</span>
    </a>
  )
}
