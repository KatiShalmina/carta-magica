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

export const battleImages = [
  galleryImage('battle', 'battle-1', 'Battlemap view 1'),
  galleryImage('battle', 'battle-2', 'Battlemap view 2'),
  galleryImage('battle', 'battle-3', 'Battlemap view 3'),
  galleryImage('battle', 'battle-4', 'Battlemap view 4'),
  galleryImage('battle', 'battle-5', 'Battlemap view 5'),
  galleryImage('battle', 'battle-6', 'Battlemap view 6'),
]

export const loreImages = [
  galleryImage('lore', 'lore-1', 'Lore generator view 1'),
  galleryImage('lore', 'lore-2', 'Lore generator view 2'),
  galleryImage('lore', 'lore-3', 'Lore generator view 3'),
  galleryImage('lore', 'lore-4', 'Lore generator view 4'),
  galleryImage('lore', 'lore-5', 'Lore generator view 5'),
  galleryImage('lore', 'lore-6', 'Lore generator view 6'),
]

export const cityImages = [
  galleryImage(
    'city',
    'city-1',
    'Landmarks editing screen',
    'Landmarks',
  ),
  galleryImage(
    'city',
    'city-2',
    'Dynamic shadows screen',
    'Dynamic shadows',
  ),
  galleryImage(
    'city',
    'city-3',
    'Color customization screen',
    'Customize colors',
  ),
  galleryImage(
    'city',
    'city-4',
    'City plan editing screen',
    'City plan',
  ),
  galleryImage(
    'city',
    'city-5',
    'Building placement editing screen',
    'Building placement',
  ),
  galleryImage(
    'city',
    'city-6',
    'Additional city details screen',
    'Additional details',
  ),
]

export const processParametersImages = [
  galleryImage(
    'process/parameters',
    'parameter-1',
  ),
  galleryImage(
    'process/parameters',
    'parameter-2',
  ),
  galleryImage(
    'process/parameters',
    'parameter-3',
  ),
  galleryImage(
    'process/parameters',
    'parameter-4',
  ),
  galleryImage(
    'process/parameters',
    'parameter-5',
  ),
  galleryImage(
    'process/parameters',
    'parameter-6',
  ),
]

export const processRoadsImages = [
  galleryImage(
    'process/roads',
    'roads-1',
  ),
  galleryImage(
    'process/roads',
    'roads-2',
  ),
  galleryImage(
    'process/roads',
    'roads-3',
  ),
  galleryImage(
    'process/roads',
    'roads-4',
  ),
  galleryImage(
    'process/roads',
    'roads-5',
  ),
  galleryImage(
    'process/roads',
    'roads-6',
  ),
]

export const processGenerateImages = [
  galleryImage(
    'process/generate',
    'generate-1',
  ),
  galleryImage(
    'process/generate',
    'generate-2',
  ),
  galleryImage(
    'process/generate',
    'generate-3',
  ),
  galleryImage(
    'process/generate',
    'generate-4',
  ),
  galleryImage(
    'process/generate',
    'generate-5',
  ),
  galleryImage(
    'process/generate',
    'generate-6',
  ),
]

export const processSurpriseImages = [
  galleryImage(
    'process/surprise',
    'surprise-1',
  ),
  galleryImage(
    'process/surprise',
    'surprise-2',
  ),
  galleryImage(
    'process/surprise',
    'surprise-3',
  ),
  galleryImage(
    'process/surprise',
    'surprise-4',
  ),
  galleryImage(
    'process/surprise',
    'surprise-5',
  ),
  galleryImage(
    'process/surprise',
    'surprise-6',
  ),
]
