import styles from './Button.module.scss'

export default function SupportButtonHigh() {
  return (
    <a
      className={styles.supportButtonHigh}
      href='https://www.kickstarter.com/projects/cartamagica/carta-magica-city-generator-3d-map-editor-and-vtt'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>Support us on Kickstarter</span>
    </a>
  )
}
