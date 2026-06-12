import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styles from './Slider.module.scss'
import { useIsDesktop } from '../hooks/useIsDesktop'

export default function Slider({ images }) {
  const isDesktop = useIsDesktop()

  if (!isDesktop) {
    return (
      <div className={styles.mobileGallery}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=''
            className={styles.image}
          />
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
          pagination: false,
          drag: 'free',
          rewind: true,
          trimSpace: true,
          focus: 0,
        }}
      >
        {images.map((src) => (
          <SplideSlide key={src} className={styles.slide}>
            <img
              src={src}
              alt=''
              className={styles.image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
