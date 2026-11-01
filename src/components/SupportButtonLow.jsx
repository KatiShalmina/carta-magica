import styles from './Button.module.scss'

export default function SupportButtonLow() {
  return (
    <a
      className={styles.supportButtonLow}
      href='https://kickstarter.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>Notify me on Kickstarter</span>
    </a>
  )
}
