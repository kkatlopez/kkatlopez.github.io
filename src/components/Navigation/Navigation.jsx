import { BrowserRouter, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation-wrapper'>
                <BrowserRouter>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <HashLink to='#about'>About</HashLink>
                    </li>
                    <li>
                        <HashLink to='#experience'>Experience</HashLink>
                    </li>
                    <li>
                        <HashLink to='#contact'>Contact</HashLink>
                    </li>
                </BrowserRouter>
            </ul>
        </nav>
    );
}
