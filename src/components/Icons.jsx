import styles from './Process.module.scss'
import castle from '../assets/icons/setting/castle-icon.svg'
import village from '../assets/icons/setting/village-icon.svg'
import medieval from '../assets/icons/setting/medieval-icon.svg'
import city from '../assets/icons/setting/city-icon.svg'
import cyberpunk from '../assets/icons/setting/cyberpunk-icon.svg'
import gothic from '../assets/icons/setting/gothic-icon.svg'
import cthulhu from '../assets/icons/setting/cthulhu-icon.svg'
import desert from '../assets/icons/setting/desert-icon.svg'

export default function Icons() {
  return (
    <ul className={styles.settingList}>
      <li className={styles.settingItem}>
        <img src={castle} alt="" />
        Castle
      </li>
      <li className={styles.settingItem}>
        <img src={village} alt="" />
        Village
      </li>
      <li className={styles.settingItem}>
        <img src={medieval} alt="" />
        Medieval town
      </li>
      <li className={styles.settingItem}>
        <img src={city} alt="" />
        Modern city
      </li>
      <li className={styles.settingItem}>
        <img src={cyberpunk} alt="" />
        Cyberpunk
      </li>
      <li className={styles.settingItem}>
        <img src={gothic} alt="" />
        Gothic
      </li>
      <li className={styles.settingItem}>
        <img src={cthulhu} alt="" />
        Cthulhu
      </li>
      <li className={styles.settingItem}>
        <img src={desert} alt="" />
        City in the desert
        </li>
    </ul>
  )
}


