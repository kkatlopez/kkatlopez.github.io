import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navigation.scss';

export default function Navigation() {
    const [active, setActive] = useState(null);
    const [show, setShow] = useState(window.innerWidth > 800);

    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [active]);

    if (!show) return null;

    return (
        <nav className='navigation'>
            <ul className='navigation-wrapper'>
                <BrowserRouter>
                    <li>
                        <HashLink to='#about' className={active === 'about' ? 'active' : ''}>
                            About <span></span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to='#experience' className={active === 'experience' ? 'active' : ''}>
                            Experience
                        </HashLink>
                    </li>
                </BrowserRouter>
            </ul>
        </nav>
    );
}
