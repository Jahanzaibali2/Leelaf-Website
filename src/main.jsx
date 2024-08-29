import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './Components/Button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    

  </StrictMode>,
)

// https://www.figma.com/design/XVplzUaEU5XnkK7ABLuaoz/Untitled?node-id=0-1&t=vdyxiVr5IFcYbNVt-1 