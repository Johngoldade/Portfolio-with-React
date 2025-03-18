import { Link } from 'react-router-dom'
import socialImg from '../assets/social.png'



function Links(props) {
    
    return (
        <div className="d-flex flex-wrap justify-content-center p-2">
            {props.sites.map((site) => {
                return (
                    <div className="card text-bg-dark cards text-start m-5" key={site.id}>
                        <img src={site.imagePath} className="card-img cards-img" alt={site.imgDescription}/>
                        <div className="card-body card-text cards-back">
                            <h4><Link to={site.projectUrl} className='card-title'>{site.projectName}</Link></h4>
                            <Link to={site.repoUrl}><img src={socialImg} className='cards-links m-2'></img></Link>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Links