import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <App />
)
