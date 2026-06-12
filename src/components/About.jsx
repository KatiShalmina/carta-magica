import SupportButtonLow from './SupportButtonLow'
import styles from './About.module.scss'

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.unitTitle}>Stay in touch!</h2>
        <p className={styles.aboutText}>We’re Albert and Ilya – longtime DMs and players who also happen to be software developers. We built Carta Magica to spend less time prepping and more time telling stories with our friends.</p>
        <SupportButtonLow />
        <p className={`${styles.aboutText} ${styles.aboutLinks}`}>
          <span>
            Follow us on{' '}
            <a
              className={styles.followTwitter}
              href='https://x.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              X,
            </a>
          </span>

          <span>
            <a
              className={styles.followFacebook}
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook,
            </a>
          </span>

          <span>
            <a
              className={styles.followReddit}
              href='https://reddit.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Reddit,
            </a>
          </span>

          <span>
            <a
              className={styles.followReddit}
              href='https://discord.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Discord,
            </a>
          </span>

          <span>
            and{' '}
            <a
              className={styles.followYoutube}
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              YouTube.
            </a>
          </span>
        </p>
        <p className={styles.aboutText}>Subscribe to our mailing list to stay updated:</p>
        <form
          className={styles.subscribeForm}
          action='https://formspree.io/f/xeewldzq'
          method='POST'
        >
          <label
            htmlFor='email'
            className={styles.visuallyHidden}
          >
            Enter you email
          </label>
          <input
            className={styles.input}
            id='email'
            type='email'
            name='email'
            placeholder='dm_d20@example.com'
            required
          />
          <button
            className={styles.subscribeButton}
            type='submit'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
