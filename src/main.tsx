import { createRoot } from 'react-dom/client'
import { App } from './App'

const domElement = document.getElementById('root') as HTMLElement
const root = createRoot(domElement)

root.render(<App/>)
