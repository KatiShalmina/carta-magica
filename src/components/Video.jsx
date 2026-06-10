import { useState } from 'react'
import styles from './Video.module.scss'
import PlayButton from '../assets/icons/play.svg?react'

export default function Video({
  videoId,
  cover800,
  cover1280,
  coverOriginal,
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={styles.videoContainer}>
      <div
        className={styles.videoCover}
        onClick={() => setIsPlaying(true)}
        style={{
          '--cover800': `url(${cover800})`,
          '--cover1280': `url(${cover1280})`,
          '--coverOriginal': `url(${coverOriginal})`,
        }}
      >
        <div className={styles.videoOverlay}></div>
        <button className={styles.playButton} type='button'>
          <PlayButton className={styles.playIcon} />
        </button>
      </div>
    </div>
  )
}
