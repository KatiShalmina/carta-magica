import styles from './Goals.module.scss'
import Perspective from '../assets/icons/goals/perspective.svg?react'
import Mode from '../assets/icons/goals/3d-mode.svg?react'
import Seasons from '../assets/icons/goals/seasons.svg?react'
import Weather from '../assets/icons/goals/weather.svg?react'
import Events from '../assets/icons/goals/events.svg?react'
import Navigator from '../assets/icons/goals/navigator.svg?react'

import Journal from '../assets/icons/goals/journal.svg?react'
import Editor from '../assets/icons/goals/editor.svg?react'
import Tools from '../assets/icons/goals/tools.svg?react'

import Layers from '../assets/icons/goals/layers.svg?react'
import Battlemaps from '../assets/icons/goals/battlemaps.svg?react'

import Asset from '../assets/icons/goals/asset.svg?react'
import Hub from '../assets/icons/goals/hub.svg?react'

import Slider from './Slider'
import { goalsImages } from '../data/gallery'

export default function Goals() {
  return (
    <section className={styles.goals} id='release'>
      <h1 className='visuallyHidden'>Goals</h1>
      <div className={styles.release}>
        <h2 className={styles.unitTitle}>Other features <span>on release</span></h2>
        <ul className={styles.releaseList}>
          <li className={styles.releaseItem}>Export to digital and ready-to-print formats.</li>
          <li className={styles.releaseItem}>Multiple modules (at least three: High Fantasy, Cyberpunk, Eldritch 1920s) available to choose from.</li>
          <li className={styles.releaseItem}>One module is included with every license.</li>
          <li className={styles.releaseItem}>Add your own unique buildings as PNGs.</li>
          <li className={styles.releaseItem}>We’ll keep building new modules and settings based on your feedback.</li>
        </ul>
      </div>

      <div className={styles.goalsWrapper}>
        <h2 className={styles.unitTitle}>Stretch goals</h2>
        <div className={styles.goalsUnitsWrapper}>
        <p className={styles.tagline}>The kickstarter campaign launches soon, and with your help we hope to achieve even more! Help us to reach these stretch goals:</p>
          <div className={styles.goalsUnit}>
            <h3 className={styles.unitSubtitle}>Visual upgrades</h3>
            <ul className={styles.goalsList}>
              <li className={styles.goalsItem}>
                <Perspective />
                Perspective view
              </li>
              <li className={styles.goalsItem}>
                <Mode />
                3D Mode
              </li>
              <li className={styles.goalsItem}>
                <Seasons />
                Seasons
              </li>
              <li className={styles.goalsItem}>
                <Weather />
                Animated weather
              </li>
              <li className={styles.goalsItem}>
                <Events />
                Animated map events: invasions, parades, fires…
              </li>
              <li className={styles.goalsItem}>
                <Navigator />
                Stylized export as drawn map or navigator screen
              </li>
            </ul>
            <h3 className={styles.unitSubtitle}>Exploration</h3>
            <ul className={styles.goalsList}>
              <li className={styles.goalsItem}>
                <Layers />
                Sewer and dungeon layers
              </li>
              <li className={styles.goalsItem}>
                <Battlemaps />
                Indoor generator for battlemaps
              </li>
            </ul>
          </div>
          <div className={styles.goalsUnit}>
            <h3 className={styles.unitSubtitle}>Gameplay</h3>
            <ul className={styles.goalsList}>
              <li className={styles.goalsItem}>
                <Journal />
                Game Master journal with descriptions, search, export to PDF
              </li>
              <li className={styles.goalsItem}>
                <Editor />
                Faction control editor
              </li>
              <li className={styles.goalsItem}>
                <Tools />
                Basic built-in VTT tools for screen share (fog of war, tokens, dice, markers)
              </li>
            </ul>
            <h3 className={styles.unitSubtitle}>Creation tools</h3>
            <ul className={styles.goalsList}>
              <li className={styles.goalsItem}>
                <Asset />
                Asset editor — add any asset, 2D or 3D
              </li>
              <li className={styles.goalsItem}>
                <Hub />
                Content hub for creators
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Slider
        images={goalsImages}
      />
    </section>
  )
}
