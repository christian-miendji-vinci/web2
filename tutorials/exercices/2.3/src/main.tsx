import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './2.3/APP/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
