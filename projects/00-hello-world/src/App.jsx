import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  // 1. Las props son una coleccion de datos que el componente padre le comparte al componente hijo, basicamente son los parametros.
  // 2. esta es un prueba de que se pueden pasar funciones como props, en este caso no es necesario pero dejo el ejemplo de la funcion en las props

  const formatUserName = (userName) => `@${userName}`

  const users = [
    {
      userName :'midudev',
      name :'Miguel Angel Duran',
      isFollowing :true,
    },
    {
      userName :'pheralb',
      name :'Pablo Hernandez',
      isFollowing :false,
    },
    {
      userName :'PacoHdezs',
      name :'Paco Hdez',
      isFollowing :true,
    },
    {
      userName :'TMChein',
      name :'Tomas',
      isFollowing :false,
    }
  ]

  return (
    <>
      <section className='App'> 
      {
        users.map(user => {
          const {userName, name,isFollowing} = user
          return (
            <TwitterFollowCard
            key={userName}
              initialIsFollowing={isFollowing} userName={userName} name={name} />        
          )
        })
      }               
      </section>
    </>
  )
}