import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
  <>
    < Header />

    <main>
      < Outlet />
    </main>

    < Footer />
  
  </>)
}

export default App
