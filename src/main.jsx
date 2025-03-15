import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import App from './App'
// import Home from './pages/Home/HomePage'
import About from './pages/About/AboutPage'
import Portfolio from './pages/Portfolio/PortfolioPage'
// import Contact from './pages/Contact/ContactPage'
// import Resume from './pages/Resume/ResumePage'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: '/About',
        element: <About />,
      },]
    //   {
    //     path: '/Portfolio',
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: '/Contact',
    //     element: <Contact />,
    //   },
    //   {
    //     path: '/Resume',
    //     element: <Resume />
    //   }
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
