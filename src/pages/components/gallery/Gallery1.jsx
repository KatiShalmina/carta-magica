import { useState } from 'react'
import styles from './Gallery.module.scss'
import PhotoAlbum from 'react-photo-album'
import 'react-photo-album/rows.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Gallery1({ slides }) {
  const [index, setIndex] = useState(-1);

  return (
    <div className={styles.gallery}>
      <PhotoAlbum
        photos={slides}
        layout='rows'
        targetRowHeight={200}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  )
}

