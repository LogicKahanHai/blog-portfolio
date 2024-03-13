
import { NavBar } from './components/components'
import { Outlet, useNavigation } from 'react-router-dom'
import * as PageLoaders from './pages/PageLoaders'

function App() {

  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    console.log('I am loading');
    return (<PageLoaders.HomeLoader />)
  }

  return (
    <>
      <div className='w-screen h-screen'>
        <NavBar />
        <main className="relative w-screen h-screen scroll-smooth">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
