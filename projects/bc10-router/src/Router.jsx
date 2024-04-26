import { Children, useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'

export default function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = []

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    if (!isRoute) return false
    return props
  })

  const routeToUSe = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routeToUSe.find(({ path }) => {
    if (currentPath === path) return true
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent />
}
