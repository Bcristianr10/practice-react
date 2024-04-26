import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  // const movies = responseMovies.Search
  // const hasMovies = movies.length > 0
  const { movies: mappedMovies } = useMovies()
  const handleSubmit = (event) => {
    event.preventDefault()
    // crea un objeto con los valores de los input, usuando el submit desde el form
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
  }
  return (
    <>
      <div className='page'>
        <header>
          <h1>Search Movies</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input name='query' type='text' placeholder='Avengers, Star Wars, The Matrix' />
            <button type='submit'>Search</button>
          </form>
        </header>
        <main>
          <Movies movies={mappedMovies} />
        </main>
      </div>
    </>
  )
}

export default App
