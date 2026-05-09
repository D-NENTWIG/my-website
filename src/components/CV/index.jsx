import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import cv from '../../assets/files/CV_David_Nentwig.pdf'
import BlurredCircle from '../cursorFollow'



const CV = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      }, [])

      return(
        <>
            <BlurredCircle/>
            <div className='container cv-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','u','r','r','i','c','u','l','u','m',' ','v','i','t','a','e',]}
                            idx={13}
                        />
                    </h1>
                    <p>
                    As a Computer Science graduate, I possess a strong foundation in programming languages, data structures, algorithms, and software engineering principles. I have completed several projects in software development, web development, and data science, developing practical skills that complement my academic knowledge. I am passionate about applying technology to solve real-world problems and excited to contribute my skills to innovative projects.
                    </p>
                </div>
                <div className='pdf-area'>
                    <embed className='embeddedCV' title='My CV' src={cv} type="application/pdf"/>
                </div>
            </div>
            <Loader type='pacman' />
        </>
      );
}


export default CV