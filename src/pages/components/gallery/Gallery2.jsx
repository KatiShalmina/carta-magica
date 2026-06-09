import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import {mockups} from '@/data/data'

export default function Carousel() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const toggleOpen = (state) => () => setOpen(state)

  const updateIndex = (when) => ({ index: current }) => {
    if (when === open) setIndex(current)
  }

  return (
    <>
      <Lightbox
        index={index}
        slides={mockups}
        plugins={[Inline]}
        on={{
          view: updateIndex(false),
          click: toggleOpen(true),
        }}
        carousel={{ padding: 0, spacing: 0, imageFit: 'cover' }}
        inline={{
          style: {
            width: '100%',
            maxWidth: '900px',
            aspectRatio: '3 / 2',
            margin: '0 auto',
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={mockups}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  )
}
