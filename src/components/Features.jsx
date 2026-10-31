import styles from './Features.module.scss'
import Bullet from '../assets/icons/bullet.svg?react'

export default function Features() {
  return (
    <section className={styles.feature} id='features'>
      <div className={styles.featureWrapper}>
        <div className={styles.featureUnit}>
          <h2 className={styles.unitTitle}>Features</h2>
          <h3 className={styles.featureUnitTitle}>World Creation & Customization</h3>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Generate grid-independent cities in seconds.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Customize every street, building, and landmark.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Adjust lighting to create the perfect atmosphere.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Import custom 3D and 2D assets.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Generate names, histories, and lore for your world.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Explore different settings with Content Packs.
            </li>
          </ul>
        </div>
        <div className={styles.featureUnit}>
          <h3 className={styles.featureUnitTitle}>Playing</h3>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Turn any location into a battlemap.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Play online through Foundry VTT or directly in your browser.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Use a TV to play in-person.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Explore your world using isometric, free, and top-down cameras.
            </li>
            <li className={styles.featureItem}>
              <Bullet width={40} height={40} />
              Mark and find important locations with geotags.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
