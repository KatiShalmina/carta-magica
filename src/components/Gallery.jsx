import { useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styles from './Gallery.module.scss'
import { useIsDesktop } from '../hooks/useIsDesktop'

export default function Gallery({ images = [], captions = false }) {
  const isDesktop = useIsDesktop()
  const [isOpen, setIsOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const mainRef = useRef(null)
  const thumbsRef = useRef(null)

  useEffect(() => {
    if (!isOpen || !mainRef.current || !thumbsRef.current) return

    mainRef.current.sync(thumbsRef.current.splide)
    mainRef.current.go(startIndex)
  }, [isOpen, startIndex])

  function openLightbox(index) {
    setStartIndex(index)
    setIsOpen(true)
  }

  if (!isDesktop) {
    return (
      <div className={styles.mobileGallery}>
        {images.map(image => (
          <figure className={styles.figure} key={image.src}>
            <img
              src={image.srcSet?.[0]?.src || image.src}
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
    <>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <button
            type='button'
            className={styles.previewButton}
            key={image.src}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.srcSet?.[0]?.src || image.src}
              srcSet={image.srcSet?.map(item => `${item.src} ${item.width}w`).join(', ')}
              sizes='(min-width: 1280px) 33vw, 100vw'
              width={image.width}
              height={image.height}
              alt={image.alt || ''}
              className={styles.previewImage}
            />

            {captions && image.title && (
              <span className={styles.previewCaption}>
                {image.title}
              </span>
            )}
          </button>
        ))}
      </div>

      {isOpen && (
        <div className={styles.lightbox} role='dialog' aria-modal='true'>
          <button
            type='button'
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label='Close gallery'
          >
            ×
          </button>

          <div className={styles.lightboxInner}>
            <Splide
              ref={mainRef}
              options={{
                type: 'fade',
                rewind: true,
                pagination: false,
                arrows: true,
                start: startIndex,
              }}
              className={styles.mainSlider}
            >
              {images.map(image => (
                <SplideSlide key={image.src}>
                  <figure className={styles.lightboxFigure}>
                    <img
                      src={image.src}
                      srcSet={image.srcSet?.map(item => `${item.src} ${item.width}w`).join(', ')}
                      sizes='100vw'
                      width={image.width}
                      height={image.height}
                      alt={image.alt || ''}
                      className={styles.lightboxImage}
                    />

                    {captions && image.title && (
                      <figcaption className={styles.lightboxCaption}>
                        {image.title}
                      </figcaption>
                    )}
                  </figure>
                </SplideSlide>
              ))}
            </Splide>

            <Splide
              ref={thumbsRef}
              options={{
                fixedWidth: 110,
                fixedHeight: 70,
                gap: 10,
                rewind: true,
                pagination: false,
                arrows: false,
                isNavigation: true,
                focus: 'center',
                cover: true,
                start: startIndex,
              }}
              className={styles.thumbsSlider}
            >
              {images.map(image => (
                <SplideSlide key={image.src}>
                  <img
                    src={image.srcSet?.[0]?.src || image.src}
                    alt=''
                    className={styles.thumbImage}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </>
  )
}
