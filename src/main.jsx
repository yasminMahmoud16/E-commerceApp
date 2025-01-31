import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import '../node_modules/flowbite/dist/flowbite.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import 'swiper/css';
import '@splidejs/react-splide/css/sea-green';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
