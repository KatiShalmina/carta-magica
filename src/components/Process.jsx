import styles from './Process.module.scss'
import Slider from './Slider'
import { processSurpriseImages } from '../data/gallery'
import VideoShort from './VideoShort'
import Architect from '../assets/assistants/Ar_1.png'
import Builder from '../assets/assistants/Bd_1.png'
import Scribe from '../assets/assistants/Sc_6.png'

export default function Process() {
  return (
    <section className={styles.process} id='process'>
      <div className={styles.processWrapper}>
        <div className={styles.processIntroduction}>
          <h2 className={styles.unitTitle}>How it works</h2>
          <p className={styles.processIntroduction}>Game masters, meet your new prep assistants: The Architect, The Builder, and The Scribe. These three handcrafted procedural algorithms take care of the tedious work without using any generative AI.</p>
        </div>

        <div className={styles.processUnit}>
          <h3 className={styles.processUnitTitle}>Stage 1: The Game Master Shapes the World</h3>
          <p>Sketch a rough plan of your city, or simply set the map parameters.</p>
          <VideoShort src='/images/shorts/Prototype.webm' />
        </div>

        <div className={styles.processUnit}>
          <h3 className={styles.processUnitTitle}>Stage 2: The Architect Plans a City</h3>
          <img
            className={styles.assistantImage}
            src={Architect}
            alt='The Architect'
          />
          <p>The Architect generates multiple 2D city plans to choose from.</p>
          <VideoShort src='/images/shorts/CityAppears.webm' />
        </div>

        <div className={styles.processUnit}>
          <h3 className={styles.processUnitTitle}>Stage 3: The Builder brings it to life</h3>
          <img
            className={styles.assistantImage}
            src={Builder}
            alt='The Builder'
          />
          <p>The Builder transforms your plan into a detailed 3D world, where every building is procedurally generated and unique.</p>
          <VideoShort src='/images/shorts/Builder.webm' />
        </div>

        <div className={styles.processUnit}>
          <h3 className={styles.processUnitTitle}>Stage 4: The Scribe creates the Lore</h3>
          <img
            className={styles.assistantImage}
            src={Scribe}
            alt='The Builder'
          />
          <p>The Scribe generates names and lore for streets, buildings, and landmarks based on your input.</p>
          <VideoShort src='/images/shorts/Tags.webm' />
        </div>

        <div className={styles.processUnit}>
          <h3 className={styles.processUnitTitle}>Stage 5: Make it your own</h3>
          <p>Use lighting to set the mood, from cheerful and welcoming to mysterious and terrifying. Add locations vital to your story. Import custom models and textures. Raise your flags over the towers.</p>
          <VideoShort src='/images/shorts/FinalTouches.webm' />
        </div>

        <div className={styles.processUnit}>
          <p>Control your world and let Carta Magica do the heavy lifting!</p>
          <Slider
            images={processSurpriseImages}
          />
        </div>
      </div>
    </section>
  )
}
