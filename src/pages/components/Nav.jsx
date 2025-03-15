import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
    const page = useLocation().pathname

    return(
        <>
            <nav className="navbar navbar-expand-lg nav">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/Portfolio" className={page === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/About" className={page === '/About' ? 'nav-link active' : 'nav-link'}>About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Contact" className={page === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Resume" className={page === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}