import { useState } from 'react';
import Actions from './Actions';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/header.scss';

function Header() {
    const [ show, setShow ] = useState(true);
    const [ showClass, setShowClass ] = useState("");
    const isVisible = () => {
        setShow(show => !show);
        setShowClass("invis");
    };

    return (
        <Container className={show ? `window` : `window ${showClass}`}>
            <div onClick={() => isVisible()}>
                <Actions name="About Me" />
            </div>
            { show ?
                <Row className="d-flex align-items-center">
                    <Col md="5" lg="3">
                        <div className="img-container my-2">
                            <img src="./images/me.jpg" className="img-fluid image" alt="Kat Lopez"/>
                        </div>
                    </Col>
                    <Col>
                        <h1>&#128075; Hi! I'm Kat Lopez</h1>
                        <p>Full-stack developer & UI/UX designer at IBM Security Learning Services</p>
                        <hr/>
                        <p>&#128205;&nbsp; Cambridge, MA</p>
                        <p>&#129293;&nbsp; Passion for frontend development, end-user experience, and web accessibility</p>
                    </Col>
                </Row>
            : null }
        </Container>
    );
}

export default Header;
