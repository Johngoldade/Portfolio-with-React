// Import needed components and package items
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import { Outlet } from 'react-router-dom'

// Return the rendered page with a header, the selected page, and the footer and export it for use by main.jsx
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
