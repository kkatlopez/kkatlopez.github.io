import { useState } from 'react';
import Actions from './Actions';
import { Container, Row, Col } from 'react-bootstrap';
import { faLinkedin, faDribbbleSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                        <hr/>
                        <Row className="socials">
                            <Col xs={6} lg="auto" className="social">
                                <p><FontAwesomeIcon icon={faLinkedin} size="lg" className="fa-fw me-1" color="#0077b5"/><a href="https://linkedin.com/in/kkatlopez">LinkedIn</a></p>
                            </Col>
                            <Col xs={6} lg="auto" className="social">
                                <p><FontAwesomeIcon icon={faGithubSquare} size="lg" className="fa-fw me-1" color="#6e5494"/><a href="https://github.com/kkatlopez">GitHub</a></p>
                            </Col>
                            <Col xs={6} lg="auto" className="social">
                                <p><FontAwesomeIcon icon={faDribbbleSquare} size="lg" className="fa-fw me-1" color="#ea4c89"/><a href="https://dribbble.com/kkatlopez">Dribbble</a></p>
                            </Col>
                            <Col xs={6} lg="auto" className="social">
                                <p><FontAwesomeIcon icon={faSquareEnvelope} size="lg" className="fa-fw me-1" color="#51a0d5"/><a href="mailto:me@kkatlopez.xyz">Email</a></p>
                            </Col>
                            <Col xs={6} lg="auto" className="social">
                                <p><FontAwesomeIcon icon={faSquarePollHorizontal} size="lg" className="fa-fw me-1" color="#ed4c4c"/><a href={process.env.PUBLIC_URL + '/images/Katrina-Lopez_Resume.pdf'} target="_blank" rel="noreferrer">Resumé</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            : null }
        </Container>
    );
}

export default Header;
