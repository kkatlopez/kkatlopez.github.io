import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';

function App() {
    return (
        <Container role="main" className="p-5">
            <Row>
                <Header />
            </Row>
            <Row>
                <Experience />
            </Row>
            <Row>
                <Col xs="12" lg="7" className="ps-0">
                    <Education />
                </Col>
                <Col xs="12" lg="5" className="pe-0">
                    <Skills />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
