import styles from './Button.module.scss'

export default function SupportButtonHigh() {
  return (
    <a
      className={styles.supportButtonHigh}
      href='https://kickstarter.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>Support us on Kickstarter</span>
    </a>
  )
}
