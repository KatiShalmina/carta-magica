import styles from './Process.module.scss'
import castle from '@/images/icons/setting/castle-icon.svg'
import village from '@/images/icons/setting/village-icon.svg'
import medieval from '@/images/icons/setting/medieval-icon.svg'
import city from '@/images/icons/setting/city-icon.svg'
import cyberpunk from '@/images/icons/setting/cyberpunk-icon.svg'
import gothic from '@/images/icons/setting/gothic-icon.svg'
import cthulhu from '@/images/icons/setting/cthulhu-icon.svg'
import desert from '@/images/icons/setting/desert-icon.svg'

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


