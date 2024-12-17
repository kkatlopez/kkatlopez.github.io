import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation-wrapper'>
                <BrowserRouter>
                    <li>
                        <HashLink to='#about'>About</HashLink>
                    </li>
                    <li>
                        <HashLink to='#experience'>Experience</HashLink>
                    </li>
                </BrowserRouter>
            </ul>
        </nav>
    );
}
