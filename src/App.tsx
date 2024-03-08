
import { NavBar } from './components/components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
