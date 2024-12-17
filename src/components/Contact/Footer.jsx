import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='icon-wrapper'>
                    <a href='https://linkedin.com/in/kkatlopez' target='_blank' rel='noopener'>
                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                    </a>
                    <a href='https://github.com/kkatlopez' target='_blank' rel='noopener'>
                        <FontAwesomeIcon icon={faSquareGithub} className='icon' />
                    </a>
                </div>
                <p>
                    Coded in{' '}
                    <a href='https://code.visualstudio.com/' className='inline' target='_blank' rel='noopener'>
                        Visual Studio Code
                    </a>{' '}
                    by me. Built with{' '}
                    <a href='https://vite.dev/' className='inline' target='_blank' rel='noopener'>
                        Vite
                    </a>{' '}
                    in{' '}
                    <a href='https://react.dev/' className='inline' target='_blank' rel='noopener'>
                        React
                    </a>
                    , deployed with{' '}
                    <a href='https://pages.github.com/' className='inline' target='_blank' rel='noopener'>
                        GitHub Pages
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
