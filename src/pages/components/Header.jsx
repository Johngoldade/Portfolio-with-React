import Nav from './Nav'

function Header() {
    return( 
        <header className="header d-flex justify-content-between flex-row align-items-center">
            <h1 className="p-4 h1 fs-1 header-h1 m-3">John Goldade</h1>
            < Nav />
        </header>
    )
}


export default Header; 