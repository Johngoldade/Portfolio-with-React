import { Link } from 'react-router-dom'

function Links(props) {

    return (
        <main className="d-flex flex-wrap justify-content-center p-2">
            {Array.isArray(props.sites) && props.sites.map((site) => {
                return (
                    <div className="card text-bg-dark cards m-5" key={site.id}>
                        <img src={site.imgPath} className="card-img cards-img" alt={site.imgDescription}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title"><Link to={site.projectUrl}>{site.projectName}</Link></h5>
                            <Link to={site.repoUrl}>Repo Link</Link>
                        </div>
                    </div>
                );
            })}
        </main>
    )
}

export default Links