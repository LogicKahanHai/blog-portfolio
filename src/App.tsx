
import { NavBar, Footer } from './components/components'
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
      <div className='flex flex-col'>
        <NavBar />
        <main className="scroll-smooth">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
