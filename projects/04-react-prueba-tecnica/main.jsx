// Importamos la función `createRoot` desde la biblioteca 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

// Obtenemos el elemento HTML con el id 'app'
const rootElement = document.getElementById('app')

// Creamos un objeto raíz usando la función `createRoot` y pasando el elemento HTML
const root = createRoot(rootElement)

// Renderizamos el elemento JSX `<h1>Hello</h1>` dentro del objeto raíz
root.render(<App />)
