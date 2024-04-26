import './App.css'
// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
import Router from './Router'
import SearchPage from './pages/SearchPage'

import { Page404 } from './pages/Page404'
import { Route } from './Route'
import { Suspense, lazy } from 'react'

// Esto para que cargue  el componente solo cuando se necesite (lazy) y no al principio de la aplicación
const LazyHomePage = lazy(() => import('./pages/HomePage'))
const LazyAboutPage = lazy(() => import('./pages/AboutPage'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
