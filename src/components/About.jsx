import SupportButtonLow from './SupportButtonLow'
import styles from './About.module.scss'

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.unitTitle}>Stay in touch</h2>
        <p className={styles.aboutText}>We’re Albert and Ilya, longtime GMs and players who also happen to be software developers. We built Carta Magica to spend less time prepping and more time telling stories with our friends.</p>
        <SupportButtonLow />
        <p className={`${styles.aboutText} ${styles.aboutLinks}`}>
          <span>
            Follow us on{' '}
            <a
              className={styles.followReddit}
              href='https://www.reddit.com/r/Cartamagica/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Reddit,
            </a>
          </span>
          <span>
            <a
              className={styles.followDiscord}
              href='https://discord.gg/QqEq4KGvXz'
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
              href='https://www.youtube.com/@CartaMagicaApp'
              target='_blank'
              rel='noopener noreferrer'
            >
              YouTube.
            </a>
          </span>
        </p>

        {/* <div className={styles.subsribeWrapper}>
          <p className={styles.subscribeText}>Subscribe to our mailing list to stay updated:</p>
          <form
            className={styles.subscribeForm}
            action='https://formspree.io/f/xeewldzq'
            method='POST'
          >
            <label
              htmlFor='email'
              className='visuallyHidden'
            >
             Enter you email
            </label>
            <input
              className={styles.input}
              id='email'
              type='email'
              name='email'
              placeholder='gm_d20@example.com'
            required
            />
            <button
              className={styles.subscribeButton}
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>
    </section>
  )
}
