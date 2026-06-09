import styles from './AppLayout.module.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Release from './components/Release'
import Goals from './components/Goals'
import Footer from './components/Footer'
import About from './components/About'

export default function AppLayout() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <Release />
        <Goals />
        <About />
      </main>
      <Footer />
    </div>
  )
}
