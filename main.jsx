import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './src/styles/styles.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <App />
)
