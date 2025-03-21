import family from './assets/IMG_0104.png'

export default function About() {
    return( 
        <div className="p-5">
            <h2 className="fs-1 p-5 header-h2">About Me</h2>
            <img src={family} alt="John Goldade with wife and two daughters" className="about-img"></img>
            <p className="p-5 m-5 about-p">My name is John Goldade. I am 26 years old and currently live in Wamego, KS with my wife and two beautiful daughters. I have a backgound in construction, which I worked on and off for six years while I finished high school and attended two years of a liberal arts program at a private college in Kansas. I am currently employed at a local manufacturing company as the Industrial Maintenance Manager, where I oversee the maintenance and repair of the company's production equipment, as well as help with some software and hardware upgrades for our custom machines. From my dad and my jobs, I have learned a wide range of hands on skills including woodworking, metalworking, vehicle repair, house repair, welding, plumbing, and electrical, as well as the value of hard work and dependability. I enjoy woodworking most of all as a hobby due to its attention to detail and the ability to draw out the beauty of wood. I am a private pilot and have dreamed of being an airline pilot since childhood, though, unfortunately, I do not have the money and time to pursue that career path anymore. I am now attending a Software Development Bootcamp through the University of Kansas with hopes to pivot into the field of software engineering. I have been told that I am a good problem solver and I enjoy the challenge of developing simple and logical solutions to complex problems and needs. I look forward to a future in this field and am excited to get to work in a career that makes lives easier.  
            </p>
        </div>
    )
}