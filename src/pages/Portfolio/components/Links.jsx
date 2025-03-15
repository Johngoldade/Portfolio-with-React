import { Link } from 'react-router-dom'
import linkImg from '../assets/link.png'
import socialImg from '../assets/social.png'

function Links(props) {
    
    return (
        <div className="d-flex flex-wrap justify-content-center p-2">
            {props.sites.map((site) => {
                return (
                    <div className="card text-bg-dark cards text-start m-5" key={site.id}>
                        <img src={site.imgPath} className="card-img cards-img" alt={site.imgDescription}/>
                        <div className="card-img-overlay card-text cards-back">
                            <h5 className="card-title fs-3">{site.projectName}</h5>
                            <Link to={site.projectUrl}><img src={linkImg} className='cards-links m-2'></img></Link>
                            <Link to={site.repoUrl}><img src={socialImg} className='cards-links m-2'></img></Link>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Links