import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>This page is example for create React Router and to Navegate</p>
      <b>Menu</b>
      <nav>
        <ul>
          <li><Link to='/search/cars'> Search Cars</Link></li>
          <li><Link to='/about'> About </Link></li>
          <li><Link to='/error404'> Not Found 404 </Link></li>
        </ul>
      </nav>
    </>
  )
}
