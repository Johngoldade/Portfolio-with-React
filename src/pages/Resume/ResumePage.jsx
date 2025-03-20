import { Link } from 'react-router-dom'

export default function Resume() {

    return (
        <>
            <div className="p-5">
                <h2 className="fs-1 p-5 header-h2">Resume</h2>
                <p className="fs-5 ">Click here to dowload my <Link to="../../../public/resume.doc" target="_blank" download className='resume-text'>resume</Link>!</p>
                <div className="text-start prof-div p-5">
                    <h3>Front-End Proficiencies</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS 3</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Responsive Web Design</li>
                        <li>React.js</li>
                        <li>Bootstrap CSS Framework</li>
                    </ul>
                    <h3>Back-End Proficiencies</h3>
                    <ul>
                        <li>API Integration</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>
        </>
    )
}