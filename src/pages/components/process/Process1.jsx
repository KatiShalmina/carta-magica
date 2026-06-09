import styles from './Process.module.scss'
import Icons from './Icons'

export default function Process1() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.processWrapper}>
      <h2 className={styles.unitTitle}>How does it work?</h2>
      <div className={styles.iconUnit}>
        <p className={styles.iconUnitText}>Easy! Choose your setting and style.</p>
        <Icons />
      </div>
      <ul className={styles.processList}>
        <li className={styles.processItem}>
          <p className={styles.processDescription}>Set map parameters (or use ready-to-go template).</p>
          <img src="/process/process-1.jpg" alt="Process 1" />
        </li>
        <li className={styles.processItem}>
          <p className={styles.processDescription}>Place main roads, districts, and landmarks.</p>
          <img src="/process/process-2.jpg" alt="Process 2" />
        </li>
        <li className={styles.processItem}>
          <p className={styles.processDescription}>Hit Generate. Your city is ready to explore!</p>
          <img src="/process/process-3.jpg" alt="Process 3" />
        </li>
        <li className={styles.processItem}>
          <p className={styles.processDescription}>Or you can skip all these steps and let Carta Magica surprise you!</p>
          <img src="/process/process-4.jpg" alt="Process 4" />
        </li>
      </ul>
      </div>
    </section>
  )
}
