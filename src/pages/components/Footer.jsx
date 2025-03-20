import { Link } from 'react-router-dom'
import gitlogo from './assets/github-logo.png'
import lilogo from './assets/linkedin.png'
import devLogo from './assets/dev.png'

export default function Footer() {
    return (
        <footer className='d-flex justify-content-center p-2'>
            <Link to="https://github.com/Johngoldade"><img src={gitlogo} className='footer-img m-2'></img></Link>
            <Link to="https://www.linkedin.com/in/john-goldade-00b596356"><img src={lilogo} className='footer-img m-2'></img></Link>
            <Link to="https://dev.to/john_goldade_71763c898c2c"><img src={devLogo} className='footer-img m-2'></img></Link>
        </footer>
    )
}