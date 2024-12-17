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
            <Navigation />
            <About />
            <Experience />
            <Footer />
        </>
    );
}

export default App;
