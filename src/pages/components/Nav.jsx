import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
    const page = useLocation().pathname

    return(
        <>
            <nav className="fs-5 navbar navbar-expand-lg m-3">
                <div className="container-fluid">
                    <button className="navbar-toggler border border-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/" className={page === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Portfolio" className={page === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Contact" className={page === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Resume" className={page === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}