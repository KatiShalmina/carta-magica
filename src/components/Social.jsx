import styles from './Social.module.scss'
import discord from '../assets/icons/social/discord-icon.svg'
import facebook from '../assets/icons/social/facebook-icon.svg'
import reddit from '../assets/icons/social/reddit-icon.svg'
import x from '../assets/icons/social/x-icon.svg'
import youtube from '../assets/icons/social/youtube-icon.svg'

export default function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a className={styles.socialLink} href="#">
          <img src={discord} alt="Go to Discord" width={30} />
        </a>
      </li>
      <li>
        <a className={styles.socialLink} href="#">
          <img src={x} alt="Go to X" width={20} />
        </a>
      </li>
      <li>
        <a className={styles.socialLink} href="#">
          <img src={facebook} alt="Go to Facebook" width={25} />
        </a>
      </li>
      <li>
        <a className={styles.socialLink} href="#">
          <img src={reddit} alt="Go to Reddit" width={30} />
        </a>
      </li>
      <li>
        <a className={styles.socialLink}href="#">
          <img src={youtube} alt="Go to Youtube" width={30} />
        </a>
      </li>
    </ul>
  )
}
