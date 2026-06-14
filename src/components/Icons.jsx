import styles from './Icons.module.scss'
import Castle from '../assets/icons/setting/castle-icon.svg?react'
import Village from '../assets/icons/setting/village-icon.svg?react'
import Medieval from '../assets/icons/setting/medieval-icon.svg?react'
import City from '../assets/icons/setting/city-icon.svg?react'
import Cyberpunk from '../assets/icons/setting/cyberpunk-icon.svg?react'
import Gothic from '../assets/icons/setting/gothic-icon.svg?react'
import Cthulhu from '../assets/icons/setting/cthulhu-icon.svg?react'
import Desert from '../assets/icons/setting/desert-icon.svg?react'

export default function Icons() {
  return (
    <ul className={styles.settingList}>
      <li className={styles.settingItem}>
        <Castle />
        Castle
      </li>
      <li className={styles.settingItem}>
        <Village />
        Village
      </li>
      <li className={styles.settingItem}>
        <Medieval />
        Medieval town
      </li>
      <li className={styles.settingItem}>
        <City />
        Modern city
      </li>
      <li className={styles.settingItem}>
        <Cyberpunk />
        Cyberpunk
      </li>
      <li className={styles.settingItem}>
        <Gothic />
        Gothic
      </li>
      <li className={styles.settingItem}>
        <Cthulhu />
        Cthulhu
      </li>
      <li className={styles.settingItem}>
        <Desert />
        City in the desert
        </li>
    </ul>
  )
}


