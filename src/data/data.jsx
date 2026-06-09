import Gallery1 from "../pages/components/gallery/Gallery1"

const slidesFeature3 = [
  {
    src: "/gallery/image-customize-1.jpg",
    width: 1200,
    height: 800,
    title: "Landmarks",
  },
  {
    src: "/gallery/image-customize-2.jpg",
    width: 1200,
    height: 800,
    title: "Dynamic shadows",
  },
  {
    src: "/gallery/image-customize-3.jpg",
    width: 1200,
    height: 800,
    title: "Customize colors",
  },
  {
    src: "/gallery/image-customize-4.jpg",
    width: 1200,
    height: 800,
    title: "City plan",
  },
  {
    src: "/gallery/image-customize-5.jpg",
    width: 1200,
    height: 800,
    title: "Building placement",
  },
  {
    src: "/gallery/image-customize-6.jpg",
    width: 1200,
    height: 800,
    title: "Additional details",
  },
]

export const featureUnitData = [
  {
    id: 1,
    title: "Explore every street!",
    description: "Zoom in from the city view straight to the battlemap. Every plaza, alley, or tavern is encounter-ready. No extra prep needed. Export your battlemaps straight into your favorite VTT.",
    gallery: (
      <Gallery1
        slides={[
          { src: '/gallery/image-battlemap-1.jpg', width: 1200, height: 800, alt: 'Battlemap 1' },
          { src: '/gallery/image-battlemap-2.jpg', width: 1200, height: 800, alt: 'Battlemap 2' },
          { src: '/gallery/image-battlemap-3.jpg', width: 1200, height: 800, alt: 'Battlemap 3' },
          { src: '/gallery/image-battlemap-4.jpg', width: 1200, height: 800, alt: 'Battlemap 4' },
        ]}
      />
    ),
  },
  {
    id: 2,
    title: "Create story with Lore Generator",
    description: "Drop in your world’s events and key figures, and the Lore Generator fills the gaps — naming streets, taverns, and temples to fit your story.",
    gallery: (
      <Gallery1
        slides={[
          { src: '/gallery/image-lg-1.jpg', width: 1200, height: 800, alt: 'Lore Generator 1' },
          { src: '/gallery/image-lg-2.jpg', width: 1200, height: 800, alt: 'Lore Generator 2' },
          { src: '/gallery/image-lg-3.jpg', width: 1200, height: 800, alt: 'Lore Generator 3' },
          { src: '/gallery/image-lg-4.jpg', width: 1200, height: 800, alt: 'Lore Generator 4' },
        ]}
      />
    ),
  },
  {
    id: 3,
    title: "Make your city alive!",
    description: "Creation is just the beginning! Every part of the city is editable — landmarks, shadows, building placement, colors, even tiny details.",
    images: slidesFeature3,
  }
]

export const mockups = [
  { src: '/mockup/mockup-1.jpg', width: 1200, height: 800, alt: 'Mockup 1' },
  { src: '/mockup/mockup-2.jpg', width: 1200, height: 800, alt: 'Mockup 2' },
  { src: '/mockup/mockup-3.jpg', width: 1200, height: 800, alt: 'Mockup 3' },
]
