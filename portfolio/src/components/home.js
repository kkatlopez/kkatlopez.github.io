import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectTile from './projects/tile';
import '../css/home.css';

const Home = () => {
    const projectList = [
        {
            project: "Security Learning Academy Portal",
            type: "Full-stack Development + UI Redesign",
            desc: "An internal course lifecycle tracking tool for the Security Learning Academy team.",
            logo: "/img/ibm-sec-logo.png",
            logoAlt: "IBM Security logo",
            company: "IBM Security",
            link: "/projects/slap",
            style: "ibm"
        },
        {
            project: "Security Learning Academy",
            type: "UI Redesign",
            desc: "Free online training and courses for IBM Security products.",
            logo: "/img/ibm-sec-logo.png",
            logoAlt: "IBM Security logo",
            company: "IBM Security",
            link: "/projects/sla",
            style: "ibm"
        },
        {
            project: "swim.me",
            type: "Full-stack Development + Project Management",
            desc: "One-stop-shop web application for the RPI Swim & Dive Team to track lifetime bests and meet results.",
            logo: "/img/rpi-logo.png",
            logoAlt: "RPI logo",
            company: "Rensselaer Polytechnic Institute",
            link: "/projects/swim-me",
            style: "swim-me"
        },
        {
            project: "UClean",
            type: "Project Management",
            desc: "Progress web application for auditing the cleanliness of aircrafts.",
            logo: "/img/united-logo.png",
            logoAlt: "United Airlines logo",
            company: "United Airlines",
            link: "/projects/UClean",
            style: "united"
        }
    ]
    return (
        <Container fluid className="px-0 pb-5">
            <Container fluid>
                <Row className="d-flex p-5 jumbotron">
                    <Col className="my-auto">
                        <h1 className="display-3 fw-bold">👋🏻  Hi! I'm Kat Lopez</h1>
                        <p className="fs-3 mb-0">Software developer + UI/UX designer for IBM</p>
                        <p className="fs-5">Passionate in full-stack web development, UI design, end-user experience, and web accessibility.</p>
                        <div className="d-flex justify-content start">
                            <Button href="mailto:kkatlopez18@gmail.com" target="_blank" variant="dark" className="me-2">📤 Send me an email</Button>
                            <Button href='/img/KatrinaLopezResume.pdf' target="_blank" variant="dark">📄 View my resumé</Button>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row className="px-5 py-3">
                        <h2 className="fs-1 py-3">Projects & Work</h2>
                        {
                            projectList.map(function(p) {
                                return(<ProjectTile project={p}/>)
                            })
                        }
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default Home;
