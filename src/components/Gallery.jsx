import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import styles from './Gallery.module.scss'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Gallery({ images = [], captions = false }) {
  const isLightbox = useMediaQuery('(min-width: 1280px)')

  if (!isLightbox) {
    return (
      <div className={styles.imageColumn}>
        {images.map(image => (
          <figure className={styles.figure} key={image.src}>
            <img
              src={image.srcSet?.[1]?.src || image.src}
              srcSet={image.srcSet?.map(item => `${item.src} ${item.width}w`).join(', ')}
              sizes='100vw'
              width={image.width}
              height={image.height}
              alt={image.alt || ''}
              className={styles.image}
            />

            {captions && image.title && (
              <figcaption className={styles.caption}>
                {image.title}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    )
  }

  return (
    <Lightbox
      open
      close={() => {}}
      slides={images}
      plugins={[Thumbnails]}
      carousel={{
        finite: false,
        preload: 2,
      }}
      thumbnails={{
        position: 'bottom',
        border: 0,
        gap: 0,
        width: 160,
        height: 100,
      }}
    />
  )
}
