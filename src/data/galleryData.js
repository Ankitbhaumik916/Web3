import IMAGE01 from '@/assets/1.jpeg'
import IMAGE02 from '@/assets/2.jpeg'
import IMAGE03 from '@/assets/3.jpeg'
import IMAGE04 from '@/assets/4.jpeg'
import IMAGE05 from '@/assets/5.jpeg'

const galleryPlaneData = [
  {
    fallbackColor: '#feca4f',
    accentColor: '#feca4f',
    textureSrc: IMAGE01,
    position: { x: -0.9, y: 0 },
    backgroundColor: '#fffaf0',
    blob1Color: '#ffdf94',
    blob2Color: '#fce7c4',
    label: {
      word: 'abstract form',
      pms: 'PMS 135 C',
      color: '#2e2e2e',
    },
  },
  {
    fallbackColor: '#80455a',
    accentColor: '#80455a',
    textureSrc: IMAGE02,
    position: { x: 0.8, y: 0 },
    backgroundColor: '#fffaf0',
    blob1Color: '#d29a41',
    blob2Color: '#bb96af',
    label: {
      word: 'expression',
      pms: 'PMS 4985 C',
      color: '#2e2e2e',
    },
  },
  {
    fallbackColor: '#fa7b71',
    accentColor: '#fa7b71',
    textureSrc: IMAGE03,
    position: { x: -0.7, y: 0 },
    backgroundColor: '#5f81ab',
    blob1Color: '#f88b8d',
    blob2Color: '#cfbbdd',
    label: {
      word: 'emotion',
      pms: 'PMS 170 C',
      color: '#f4f4f4',
    },
  },
  {
    fallbackColor: '#3c72c6',
    accentColor: '#3c72c6',
    textureSrc: IMAGE04,
    position: { x: 1, y: 0 },
    backgroundColor: '#5b9bc2',
    blob1Color: '#ffaa00',
    blob2Color: '#00e1ff',
    label: {
      word: 'depth',
      pms: 'PMS 660 C',
      color: '#f4f4f4',
    },
  },
  {
    fallbackColor: '#fdd895',
    accentColor: '#fdd895',
    textureSrc: IMAGE05,
    position: { x: -0.7, y: 0 },
    backgroundColor: '#7d936e',
    blob1Color: '#fdd895',
    blob2Color: '#a5b599',
    label: {
      word: 'essence',
      pms: 'PMS 7507 C',
      color: '#f4f4f4',
    },
  },
]

export { galleryPlaneData }
