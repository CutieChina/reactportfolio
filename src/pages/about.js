// import uniqid from 'uniqid'
import { aboutport } from './aboutport.js'
import ProjectContainer from './ProjectContainer'
import './Projects.css'

const About = () => {
  if (!aboutport.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Art Pieces</h2>

      <div className='projects__grid'>
        {aboutport.map((project) => (
          <ProjectContainer  project={project} />
        ))}
      </div>
    </section>
  )
}

export default About
