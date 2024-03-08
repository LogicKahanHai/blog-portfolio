
import { NavBar } from './components/components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <main className="relative w-full h-full max-h-screen scroll-smooth">
        <Outlet />
      </main>
    </>
  )
}

export default App
