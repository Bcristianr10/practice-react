import { Link } from '../Link'

export function Page404 () {
  return (
    <>
      <div className=''>
        <h1>ERROR 404</h1>
        <h6>This is NOT fine</h6>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/024/217/744/small_2x/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png' alt='Error Image' />
      </div>
      <Link to='/'> Go back to Home </Link>
    </>
  )
}
