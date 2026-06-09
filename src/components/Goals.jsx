import styles from './Goals.module.scss'
import perspective from '../assets/icons/goals/perspective.svg'
import mode from '../assets/icons/goals/3d-mode.svg'
import seasons from '../assets/icons/goals/seasons.svg'
import weather from '../assets/icons/goals/weather.svg'
import events from '../assets/icons/goals/events.svg'
import navigator from '../assets/icons/goals/navigator.svg'

import journal from '../assets/icons/goals/journal.svg'
import editor from '../assets/icons/goals/editor.svg'
import tools from '../assets/icons/goals/tools.svg'

import layers from '../assets/icons/goals/layers.svg'
import battlemaps from '../assets/icons/goals/battlemaps.svg'

import asset from '../assets/icons/goals/asset.svg'
import hub from '../assets/icons/goals/hub.svg'
import Gallery3 from './Gallery3'

export default function Goals1() {
  return (
    <section className={styles.goals}>
      <div className={styles.goalsWrapper}>
        <h2 className={styles.unitTitle}>Stretch goals</h2>
        <p className={styles.tagline}>The kickstarter campaign launches soon, and with your help we hope to achieve even more! Help us to reach these stretch goals:</p>
        <div className={styles.goalsUnitWrapper}>
          <h3 className={styles.unitSubtitle}>Visual upgrades</h3>
          <ul className={styles.goalsList}>
            <li className={styles.goalsItem}>
              <img src={perspective} alt="" width={30} height={30}/>
              Perspective view
            </li>
            <li className={styles.goalsItem}>
              <img src={mode} alt="" width={30} height={30} />
              3D Mode
            </li>
            <li className={styles.goalsItem}>
              <img src={seasons} alt="" width={30} height={30} />
              Seasons
            </li>
            <li className={styles.goalsItem}>
              <img src={weather} alt="" width={30} height={30} />
              Animated weather
            </li>
            <li className={styles.goalsItem}>
              <img src={events} alt="" width={30} height={30} />
              Animated map events: invasions, parades, fires…
            </li>
            <li className={styles.goalsItem}>
              <img className={styles.goalImage} src={navigator} alt="" width={30} height={30} />
              Stylized export as drawn map or navigator screen
            </li>
          </ul>
          <h3 className={styles.unitSubtitle}>Gameplay</h3>
          <ul className={styles.goalsList}>
            <li className={styles.goalsItem}>
              <img src={journal} alt="" width={30} height={30}/>
              Game Master journal with descriptions, search, export to PDF
            </li>
            <li className={styles.goalsItem}>
              <img src={editor} alt="" width={30} height={30} />
              Faction control editor
            </li>
            <li className={styles.goalsItem}>
              <img src={tools} alt="" width={30} height={30} />
              Basic built-in VTT tools for screen share (fog of war, tokens, dice, markers)
            </li>
          </ul>
          <h3 className={styles.unitSubtitle}>Exploration</h3>
          <ul className={styles.goalsList}>
            <li className={styles.goalsItem}>
              <img src={layers} alt="" width={30} height={30}/>
              Sewer and dungeon layers
            </li>
            <li className={styles.goalsItem}>
              <img src={battlemaps} alt="" width={30} height={30} />
              Indoor generator for battlemaps
            </li>
          </ul>
          <h3 className={styles.unitSubtitle}>Creation tools</h3>
          <ul className={styles.goalsList}>
            <li className={styles.goalsItem}>
              <img src={asset} alt="" width={30} height={30}/>
              Asset editor — add any asset, 2D or 3D
            </li>
            <li className={styles.goalsItem}>
              <img src={hub} alt="" width={30} height={30} />
              Content hub for creators
            </li>
          </ul>
          <div className={styles.galleryWrapper}>
            <Gallery3
              slides={[
                { src: '/mockup/3D1.jpg', width: 1200, height: 800, alt: 'Mockup 3D 1' },
                { src: '/mockup/3D2.jpg', width: 1200, height: 800, alt: 'Mockup 3D 2' },
                { src: '/mockup/3D3.jpg', width: 1200, height: 800, alt: 'Mockup 3D 3' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
