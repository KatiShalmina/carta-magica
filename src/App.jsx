// import { useState } from 'react'
import './App.scss'
import Layout1 from './pages/layout1/Layout1'
// import Layout2 from './pages/layout2/Layout2'
// import Layout3 from './pages/layout3/Layout3'

// const LAYOUTS = {
//   LAYOUT_1: 'layout1',
//   LAYOUT_2: 'layout2',
//   LAYOUT_3: 'layout3',
// }

export default function App() {
  // const [layout, setLayout] = useState(LAYOUTS.LAYOUT_1)

  // const views = {
  //   [LAYOUTS.LAYOUT_1]: <Layout1 />,
  //   [LAYOUTS.LAYOUT_2]: <Layout2 />,
  //   [LAYOUTS.LAYOUT_3]: <Layout3 />,
  // }

  return (
    <Layout1 />
    // <div>
    //   {views[layout]}
    //   <nav className="button-wrapper">
    //     <button
    //       className={`switch-button ${layout === LAYOUTS.LAYOUT_1 ? 'is-active' : ''}`}
    //       ara-pressed={layout === LAYOUTS.LAYOUT_1}
    //       onClick={() => setLayout(LAYOUTS.LAYOUT_1)}
    //     >
    //       layout 1
    //     </button>
    //     <button
    //       className={`switch-button ${layout === LAYOUTS.LAYOUT_2 ? 'is-active' : ''}`}
    //       ara-pressed={layout === LAYOUTS.LAYOUT_2}
    //       onClick={() => setLayout(LAYOUTS.LAYOUT_2)}
    //     >
    //       layout 2
    //     </button>
    //     <button
    //       className={`switch-button ${layout === LAYOUTS.LAYOUT_3 ? 'is-active' : ''}`}
    //       ara-pressed={layout === LAYOUTS.LAYOUT_3}
    //       onClick={() => setLayout(LAYOUTS.LAYOUT_3)}
    //     >
    //       layout 3
    //     </button>
    //   </nav>
    // </div>
  )
}

