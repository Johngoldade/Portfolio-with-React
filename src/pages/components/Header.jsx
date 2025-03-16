import Nav from './Nav'

function Header() {
    return( 
        <header className="header d-flex justify-content-between flex-row align-items-center">
            <h1 className="p-5 h1 fs-1">John Goldade</h1>
            < Nav />
        </header>
    )
}


export default Header; 