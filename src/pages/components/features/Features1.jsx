import styles from './Features.module.scss'
import { featureUnitData } from '@/data/data.jsx'
import { isValidElement } from 'react'

function FeatureImages({ items = [] }) {
  return (
    <div className={styles.imagesWrapper}>
      {items.map((it, i) => (
        <figure key={i} className={styles.image}>
          <img src={it.src} width={it.width} height={it.height} alt={it.title} />
          {it.title && <figcaption className={styles.caption}>{it.title}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

export default function Features1() {
  return (
    <section className={styles.features} id="features">
      {featureUnitData.map(unit => (
        <div className={styles.featureUnit} key={unit.id}>
          <h2 className={styles.unitTitle}>{unit.title}</h2>
          <p className={styles.description}>{unit.description}</p>
          {isValidElement(unit.gallery)
            ? unit.gallery
            : Array.isArray(unit.images)
            ? <FeatureImages items={unit.images} />
            : null}
        </div>
      ))}
    </section>
  )
}
