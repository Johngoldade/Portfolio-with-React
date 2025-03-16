import Links from "./components/Links"

import sites from "./deployedSites"

export default function Portfolio() {

    return( 
        <div className="p-5">
            <h2 className="fs-1 p-5">Portfolio</h2>
            <p className="fs-5">Click on an image to visit the webpage!</p>
            <Links sites={sites}/>
        </div>
    )

}