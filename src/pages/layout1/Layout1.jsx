import styles from './Layout1.module.scss'
import Header1 from '../components/header/Header1'
import Hero1 from '../components/hero/Hero1'
import Features1 from '../components/features/Features1'
import Process1 from '../components/process/Process1'
import Release1 from '../components/release/Release1'
import Goals1 from '../components/goals/Goals1'
import Footer1 from '../components/footer/Footer1'
import About1 from '../components/about/About1'

export default function Layout1() {
  return (
    <div className={styles.page}>
      <Header1 />
      <main>
        <Hero1 />
        <Features1 />
        <Process1 />
        <Release1 />
        <Goals1 />
        <About1 />
      </main>
      <Footer1 />
    </div>
  )
}
