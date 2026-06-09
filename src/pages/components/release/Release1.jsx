import styles from './Release.module.scss'
import Gallery2 from '../gallery/Gallery2'

export default function Release1() {
  return (
    <section className={styles.release} id="release">
      <div className={styles.releaseWrapper}>
        <h2 className={styles.unitTitle}>Other features <span>on release</span></h2>
        <ul className={styles.releaseList}>
          <li className={styles.releaseItem}>Export to digital and ready-to-print formats.</li>
          <li className={styles.releaseItem}>Multiple modules (at least three: High Fantasy, Cyberpunk, Eldritch 1920s) available to choose from.</li>
          <li className={styles.releaseItem}>One module is included with every license.</li>
          <li className={styles.releaseItem}>Add your own unique buildings as PNGs.</li>
          <li className={styles.releaseItem}>We’ll keep building new modules and settings based on your feedback.</li>
        </ul>
      <Gallery2 />
      </div>
    </section>
  )
}
