import { Link } from '../Link'

export default function SearchPage ({ routeParams }) {
  return (
    <>
      <h1>Search Results</h1>
      <p>This result: <b>{routeParams.query}</b></p>
      <Link to='/'>Go back to Home </Link>
    </>
  )
}
