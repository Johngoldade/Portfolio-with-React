// Import the "Links" component 
import Links from "./components/Links"
// Import the "sites" object list
import sites from "./deployedSites"


// Export the portfolio component that has the HTML for the portfolio page and the portfolio cards built by the Links component w/ sites props
export default function Portfolio() {

    return( 
        <div className="p-5">
            <h2 className="fs-1 p-5 header-h2">Portfolio</h2>
            <p className="fs-5">Click on an image title to visit the webpage or the GitHub icon to visit the repository.</p>
            <Links sites={sites}/>
        </div>
    )

}