import { useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import Video from './Video'
import VideoShort from './VideoShort'

export default function Hero() {
  const [expanded, setExpanded] = useState(false)
  const [isWide, setIsWide] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 470px)')

    const apply = e => {
      setIsWide(e.matches)
      setExpanded(e.matches)
    }

    apply(mql)

    mql.addEventListener('change', apply)

    return () => mql.removeEventListener('change', apply)
  }, [])

  const showShort = !isWide && !expanded
  const showFull  = isWide || expanded

  return (
    <section className={styles.hero} id='top'>
      <div className={styles.heroWrapper}>
        <div className={styles.introduction}>
          <h1 className={styles.mainTitle}>Carta Magica</h1>
          <h2 className={styles.heroTitle}>Build a city in less than a minute. Play forever</h2>

          {showShort && (
            <p>Carta Magica is a city generator, 3D map editor and virtual tabletop for RPGs. Generate large, fully editable cities and landscapes in under a minute, customize every detail, and explore the new world with your players, online or around the table.{' '}
              <button
                type='button'
                className={styles.moreButton}
                aria-controls='more-intro'
                aria-expanded={expanded}
                onClick={() => setExpanded(true)}
              >
                more
              </button>
            </p>
          )}

          {showFull && (
            <>
              <p>Carta Magica is a city generator, 3D map editor and virtual tabletop for RPGs. Generate large, fully editable cities and landscapes in under a minute, customize every detail, and explore the new world with your players, online or around the table.</p>

              <div
                id='more-intro'
                className={styles.moreContent}
              >
                <p>Sketch the outline, place a few landmarks, and watch your city come alive, from castles to taverns. And when it’s time for a fight, zoom in and any street becomes a battlemap.

                  {!isWide && (
                    <>
                      {' '}
                      <button
                        type='button'
                        className={styles.moreButton}
                        aria-controls='more-intro'
                        aria-expanded={expanded}
                        onClick={() => setExpanded(false)}
                      >
                        less
                      </button>
                    </>
                  )}
                </p>
              </div>
            </>
          )}
        </div>

        <div className={styles.videoWrapper}>
          <Video
            videoId='fhmm_JDvD-c'
            coverOriginal='/images/video-covers/original/placeholder-image.webp'
            cover1280='/images/video-covers/1280/placeholder-image.webp'
            cover800='/images/video-covers/800/placeholder-image.webp'
          />
        </div>

        <div className={styles.heroUnit}>
          <h2 className={styles.heroUnitTitle}>Generate a city map in seconds</h2>
          <p>
            Set up parameters or sketch the terrain and city borders. Your map is ready in under a minute.
          </p>
          <VideoShort src='/images/shorts/CityAppears.webm' />
        </div>
        <div className={styles.heroUnit}>
          <h2 className={styles.heroUnitTitle}>Every street is a battlemap</h2>
          <p>
            No need to search for battlemaps anymore. Just zoom in, place your tokens, adjust the grid, and start an encounter.
          </p>
          <VideoShort src='/images/shorts/Battlemap.webm' />
        </div>
        <div className={styles.heroUnit}>
          <h2 className={styles.heroUnitTitle}>Play anywhere</h2>
          <p>
            Carta Magica supports playing in full 3D through Foundry VTT or directly in a web browser. Join the adventure online, or turn your tv into a gaming table!
          </p>
          <VideoShort src='/images/shorts/Foundry.webm' />
        </div>
        <div className={styles.heroUnit}>
          <h2 className={styles.heroUnitTitle}>Your favorite setting</h2>
          <p>
                  We’re creating Content Packs for a variety of settings, from medieval fantasy to cyberpunk and the modern world.
          </p>
          <VideoShort src='/images/shorts/Foundry.webm' />
        </div>
      </div>
    </section>
  )
}
