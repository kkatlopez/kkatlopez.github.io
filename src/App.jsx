import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Contact/Footer';
import './App.scss';

function App() {
    return (
        <>
            <Home />
            <div className='main'>
                <Navigation />
                <span>
                    <section className='about' id='about'>
                        <About />
                    </section>
                    <section className='experience' id='experience'>
                        <Experience />
                    </section>
                </span>
            </div>
            <Footer />
        </>
    );
}

export default App;
