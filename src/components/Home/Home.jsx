import me from '../../assets/me.jpeg';
import './home.scss';

export default function Home() {
    return (
        <div className='home-wrapper'>
            <section className='intro'>
                <div className='blurred-bg'></div>
                <div className='container'>
                    <img src={me} className='me' />
                    <span className='text'>
                        <h1 className='header'>Hi, I&apos;m Kat Lopez</h1>
                        <h2>
                            <span>Building</span> and <span>designing</span> for the web.
                        </h2>
                        <h3>Software Engineer and UI/UX Designer @ IBM</h3>
                        <button href='mailto:kkatlopez@xyz.com'>Contact me 📬</button>
                    </span>
                </div>
            </section>
        </div>
    );
}
