import styles from './Process.module.scss'
import Icons from './Icons'
import Slider from './Slider'
import { processParametersImages, processRoadsImages, processGenerateImages, processSurpriseImages } from '../data/gallery'

export default function Process() {
  return (
    <section className={styles.process} id='process'>
      <h1 className='visuallyHidden'>Process</h1>
      <div className={styles.processWrapper}>
        <h2 className={styles.unitTitle}>How does it work?</h2>
        <div className={styles.iconUnit}>
          <p className={styles.iconUnitText}>Easy! Choose your setting and style.</p>
          <Icons />
        </div>
        <div className={styles.processUnits}>
          <div className={styles.processUnit}>
            <h2 className={styles.processUnitTitle}>Set map parameters (or use ready-to-go template):</h2>
            <Slider
              images={processParametersImages}
            />
          </div>
          <div className={styles.processUnit}>
            <h2 className={styles.processUnitTitle}>Place main roads, districts, and landmarks:</h2>
            <Slider
              images={processRoadsImages}
            />
          </div>
          <div className={styles.processUnit}>
            <h2 className={styles.processUnitTitle}>Hit Generate. Your city is ready to explore!</h2>
            <Slider
              images={processGenerateImages}
            />
          </div>
          <div className={styles.processUnit}>
            <h2 className={styles.processUnitTitle}>Or you can skip all these steps and let Carta Magica surprise you!</h2>
            <Slider
              images={processSurpriseImages}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
