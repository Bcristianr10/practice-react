import './App.css'
import { Profile } from './assets/components/profile'

function App () {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    rounded: 40
  }
  return (
    <>
      <Profile user={user} />
    </>
  )
}

export default App
