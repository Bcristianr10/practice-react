import PropTypes from 'prop-types'

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSize: PropTypes.string.isRequired,
    rounded: PropTypes.string.isRequired
  }).isRequired
}

export function Profile ({ user }) {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={
          {
            width: user.imageSize,
            height: user.imageSize,
            'border-radius': user.rounded
          }
        }
      />
    </>
  )
}
