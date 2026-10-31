import styles from './Features.module.scss'
import VideoShort from './VideoShort'

export default function Features() {
  return (
    <section className={styles.features} id='features'>
      <h1 className='visuallyHidden'>Features</h1>
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Generate a city map in seconds</h2>
        <p>
          Set up parameters or sketch the terrain and city borders. Your map is ready in under a minute.
        </p>
        <VideoShort src='/images/shorts/CityAppears.webm' />
      </div>
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Every street is a battlemap</h2>
        <p>
          No need to search for battlemaps anymore. Just zoom in, place your tokens, adjust the grid, and start an encounter.
        </p>
        <VideoShort src='/images/shorts/Battlemap.webm' />
      </div>
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Play anywhere</h2>
        <p>
          Carta Magica supports playing in full 3D through Foundry VTT or directly in a web browser. Join the adventure online, or turn your tv into a gaming table!
        </p>
        <VideoShort src='/images/shorts/Foundry.webm' />
      </div>
      <div className={styles.featureUnit}>
        <h2 className={styles.unitTitle}>Your favorite setting</h2>
        <p>
          We’re creating Content Packs for a variety of settings, from medieval fantasy to cyberpunk and the modern world.
        </p>
        <VideoShort src='/images/shorts/Foundry.webm' />
      </div>
    </section>
  )
}
