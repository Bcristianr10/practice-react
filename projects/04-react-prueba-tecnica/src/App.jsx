import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/hello?fontSize=50&fontColor=red&json=true'

export function App () {
  const [fact, setFact] = useState()
  const [catUrl, setCatUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const trheeFirstWords = fact.split(' ').slice(0, 1).join(' ')
        setCatUrl(`https://cataas.com/cat/says/${trheeFirstWords}?size=50&fontColor=red`)
      })
  }, [])
  return (
    <main>
      <h1>App de Gatos</h1>
      {fact && <p>{fact}</p>}
      {catUrl && <img src={catUrl} alt={`image ${fact}`} />}
    </main>
  )
}
