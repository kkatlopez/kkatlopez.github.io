import { BrowserRouter, NavLink } from 'react-router-dom';
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
                        <NavLink to='#about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Experience</NavLink>
                    </li>
                    <li>
                        <a href='mailto:kkatlopez@xyz.com'>Contact</a>
                    </li>
                </BrowserRouter>
            </ul>
        </nav>
    );
}
