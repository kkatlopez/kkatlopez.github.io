import Actions from './Actions';
import { Container, Row, Col } from 'react-bootstrap';
import html from './assets/html5.png';

function Skills() {
    return (
        <Container className="window">
            <Actions name="Skills" />
            <Row>
                <img src={html} className="img-fluid" alt="HTML5" />
            </Row>
        </Container>
    );
}

export default Skills;
