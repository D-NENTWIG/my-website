import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/NENTWIG.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import BlurredCircle from '../cursorFollow';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D','a','v','i','d']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r',]

    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      }, [])

    return (
        <>
            <BlurredCircle/>
            <div className="container home-page">
                <div className="text-zone">

                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}> </span>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                        
                    <br /> 

                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={17} />

                    <img src={LogoTitle} alt="developer" />
                    <br/>

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />

                    </h1>
                    <h2>UCL Alumni | Computer Science</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home