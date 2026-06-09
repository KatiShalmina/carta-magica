import styles from './Social.module.scss'
import discord from '@/images/icons/social/discord-icon.svg'
import facebook from '@/images/icons/social/facebook-icon.svg'
import reddit from '@/images/icons/social/reddit-icon.svg'
import x from '@/images/icons/social/x-icon.svg'
import youtube from '@/images/icons/social/youtube-icon.svg'

export default function Social1() {
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
