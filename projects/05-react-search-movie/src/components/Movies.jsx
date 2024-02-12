function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title} ({movie.year})</h3>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>No results found.</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}
