import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './2.6b/App/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
