import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styles from './Slider.module.scss'
import { useIsDesktop } from '../hooks/useIsDesktop'

export default function Slider({ images = [], captions = false }) {
  const isDesktop = useIsDesktop()

  if (!isDesktop) {
    return (
      <div className={styles.mobileGallery}>
        {images.map(image => (
          <figure className={styles.figure} key={image.src}>
            <img
              src={image.srcSet?.[1]?.src || image.src}
              srcSet={image.srcSet
                ?.map(pic => `${pic.src} ${pic.width}w`)
                .join(', ')
              }
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
    <div className={styles.gallery}>
      <Splide
        options={{
          type: 'slide',
          autoWidth: true,
          gap: '10px',
          arrows: true,
          pagination: true,
          drag: 'free',
          rewind: true,
          trimSpace: true,
          focus: 0,
        }}
      >
        {images.map(image => (
          <SplideSlide key={image.src} className={styles.slide}>
            <img
              src={image.srcSet?.[1]?.src || image.src}
              srcSet={image.srcSet
                ?.map(pic => `${pic.src} ${pic.width}w`)
                .join(', ')
              }
              sizes='720px'
              width={image.width}
              height={image.height}
              alt={image.alt || ''}
              className={styles.image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
