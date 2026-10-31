import styles from './VideoShort.module.scss'

export default function VideoShort({ src }) {
  return (
    <video
      className={styles.videoShort}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type='video/webm' />
    </video>
  )
}
