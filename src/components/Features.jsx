import styles from './Features.module.scss'
import Slider from './Slider'
import { battleImages, loreImages, cityImages } from '../data/gallery'

export default function Features() {
  return (
    <section className={styles.features} id='features'>
      <h1 className='visuallyHidden'>Features</h1>
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Explore every street!</h2>
        <p>
          Zoom in from the city view straight to the battlemap. Every plaza, alley, or tavern is encounter-ready. No extra prep needed. Export your battlemaps straight into your favorite VTT.
        </p>
      </div>
      <Slider
          images={battleImages}
      />
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Create story with Lore Generator</h2>
        <p>
          Drop in your world’s events and key figures, and the Lore Generator fills the gaps – naming streets, taverns, and temples to fit your story.
        </p>
      </div>
      <Slider
          images={loreImages}
      />
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Make your city alive!</h2>
        <p>
          Creation is just the beginning! Every part of the city is editable – landmarks, shadows, building placement, colors, even tiny details.
        </p>
      </div>
      <Slider
        images={cityImages}
      />
    </section>
  )
}
