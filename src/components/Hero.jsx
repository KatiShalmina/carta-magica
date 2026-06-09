import { useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import videoImg from '/video-img.png'

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
        <h1 className={styles.mainTitle}>Carta Magica</h1>

        <div className={styles.introduction}>
          <p>Create cities to tell your stories (Because Every Great  Story Needs a City).</p>

          {showShort && (
            <p>Running a city campaign is awesome. Drawing every street? Not so much. We made Carta Magica to let you focus on the things that matter...{' '}
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
              <p>Running a city campaign is awesome. Drawing every street? Not so much. We made Carta Magica to let you focus on the things that matter!</p>

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

        <div className={styles.videoContainer}>
          <img src={videoImg} alt='Video' />
        </div>

        <p className={styles.tagline}>Carta Magica builds custom cities for any setting. Pick what matters for your lore — the layout, the landmarks, the mood — and let the app fill in the streets, shops, and alleys. Fine-tune the map to whatever direction your players decide to explore.</p>
      </div>
    </section>
  )
}
