import SupportButton2 from '../button/SupportButton2'
import styles from './About.module.scss'

export default function About1() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.unitTitle}>Stay in touch!</h2>
        <p className={styles.aboutText}>We’re Albert and Ilya — longtime DMs and players who also happen to be software developers. We built Carta Magica to spend less time prepping and more time telling stories with our friends.</p>
        <SupportButton2 />
        <p className={`${styles.aboutText} ${styles.aboutLinks}`}>
          <span>Follow us on <a className={styles.followTwitter} href='#'>X,</a></span>
          <span><a className={styles.followFacebook} href='#'>Facebook,</a></span>
          <span><a className={styles.followReddit} href='#'>Reddit,</a></span>
          <span>and <a className={styles.followYoutube} href='#'>YouTube.</a></span>
        </p>
        <p className={styles.aboutText}>Subscribe to our mailing list to stay updated:</p>
        <form
          className={styles.subscribeForm}
          action='#'
          method='POST'
        >
          <label htmlFor='email' className={styles.visuallyHidden}>Enter you email</label>
          <input className={styles.input} id='email' type='email' name='email' placeholder='dm_d20@example.com' required />
          <button className={styles.subscribeButton} type='submit'>Subscribe</button>
        </form>
      </div>
    </section>
  )
}
