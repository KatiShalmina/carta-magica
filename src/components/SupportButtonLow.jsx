import styles from './Button.module.scss'

export default function SupportButtonLow() {
  return (
    <a
      className={styles.supportButtonLow}
      href='https://www.kickstarter.com/projects/cartamagica/carta-magica-city-generator-3d-map-editor-and-vtt'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>Notify me on Kickstarter</span>
    </a>
  )
}
