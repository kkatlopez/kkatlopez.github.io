import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import me from '../../assets/me.jpeg';
import './home.scss';

export default function Home() {
    const [show, setShow] = useState(window.innerWidth > 1900 || window.innerWidth < 600);

    const handleClick = () => {
        window.location.href = 'mailto:kkatlopez18@gmail.com';
    };

    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='home-wrapper'>
            <section className='intro'>
                <span className='blurred-bg' />
                <div className='container'>
                    <span>
                        <img src={me} className='me' />
                        <span className='text'>
                            <h1 className='header'>Hi, I&apos;m Kat Lopez</h1>
                            <h2>
                                <span>Building</span> and <span>designing</span> for the web.
                            </h2>
                            <h3>Software Engineer and UI/UX Designer</h3>
                            <button onClick={handleClick}>Contact me 📬</button>
                        </span>
                    </span>
                    {show && (
                        <a href='#about' className='scroll'>
                            Learn more <FontAwesomeIcon icon={faArrowDown} className='icon' />
                        </a>
                    )}
                </div>
            </section>
        </div>
    );
}
