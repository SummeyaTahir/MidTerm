import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home_Page from './Components/Home_Page/Home_Page.jsx'
import Film_item from './Components/Film_item/Film_item.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_Page/>
    {/* <Film_item/> */}
  </StrictMode>,
)
