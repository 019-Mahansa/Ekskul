import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Fungsi } from './javascript/5-function.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fungsi/>
  </StrictMode>,
)
