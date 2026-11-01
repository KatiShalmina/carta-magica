function galleryImage(folder, name, alt, title = '') {
  return {
    src: `/images/gallery/${folder}/original/${name}.webp`,
    width: 1754,
    height: 1101,
    alt,
    title,

    srcSet: [
      {
        src: `/images/gallery/${folder}/800/${name}.webp`,
        width: 800,
        height: 502,
      },
      {
        src: `/images/gallery/${folder}/1280/${name}.webp`,
        width: 1280,
        height: 803,
      },
      {
        src: `/images/gallery/${folder}/original/${name}.webp`,
        width: 1754,
        height: 1101,
      },
    ],
  }
}

export const processImages = [
  galleryImage('control', 'city_2', 'City view 1'),
  galleryImage('control', 'city_6', 'City view 2'),
  galleryImage('control', 'city_1', 'City view 3'),
  galleryImage('control', 'city_8', 'City view 4'),
  galleryImage('control', 'city_4', 'City view 5'),
  galleryImage('control', 'city_5', 'City view 6'),
  galleryImage('control', 'city_13', 'City view 1'),
  galleryImage('control', 'city_12', 'City view 2'),
  galleryImage('control', 'city_3', 'City view 3'),
  galleryImage('control', 'city_10', 'City view 4'),
  galleryImage('control', 'city_9', 'City view 5'),
]
