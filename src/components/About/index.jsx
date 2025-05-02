import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJava, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import BlurredCircle from '../cursorFollow'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      }, [])

    return(
        <>
            <BlurredCircle/>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','M','e']}
                            idx={15}
                        />
                    </h1>
                    <p>I'm David Nentwig, a Computer Science graduate from University College London with a passion for software development and data science. My programming journey has evolved significantly since my early school days, developing into expertise across multiple domains including Python, Java, C, React, HTML5, CSS, BASH, Git, and experience with Unity and Swift.</p>
                    <p>My professional path has led me to roles where I've applied my technical skills to real-world challenges. As a Junior Data Scientist at DLT Science Foundation, I developed web scraping solutions, conducted sentiment analysis, and prototyped AI-powered features for cryptocurrency research. I've brought technical ideas to life through projects like MotionInput—a collaborative effort with Intel, IBM, and Microsoft—where I served as primary web developer.</p>
                    <p>Beyond coding, I value making technology accessible to others. I've worked with community members as a Technology Workshop Instructor, helping bridge the digital divide for elderly individuals during the pandemic.</p>
                    <p>I'm excited to continue my journey in software development and data science, eager to tackle new challenges and contribute to innovative projects. Let's connect and explore how we can work together!</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color="#4682B4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faC} color="#4682B4" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faUnity} color="#808080" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default About