import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import '../../css/about-me.css';

class AboutMe extends Component {
    render() {
        return(
            <Container fluid>
                <Row className="d-flex px-5 py-0 header">
                    <Col className="my-auto">
                        <h1 className="display-3 fw-bold">About me</h1>
                    </Col>
                </Row>
               <Row className="pt-5 container mx-auto">
                    <Col xl={4} md={5} sm={12} xs={12} className="img">
                        <img src="/img/ireland.jpg" className="img-fluid mb-2" alt="Belfast Castle"/>
                        <small className="image-caption">📍 Belfast Castle, Belfast, UK (2022)</small>
                    </Col>
                    <Col>
                        <p>Hi, I'm Kat! Currently, I am a software developer for IBM Security Learning Services based in Cambridge, Massachusetts.</p>
                        <p>I'm originally from Pasadena, California and attended Rensselaer Polytechnic Institute in Troy, New York, where I graduted with a B.S. in Information Technology and Web Science (ITWS) in 2021 and an M.S. in Information Technology in 2022.</p>
                        <p>My passion for UI design and the end-user experience flourished during the end of my undergraduate degree. The intersection between technology and art excites me, especially creating interfaces that are visually appealing yet easy to use.</p>
                        <p>Recent reads:</p>
                        <ul>
                            <li><i>Build: An Unorthodox Guide to Making Things Worth Making</i> by Tony Fadell</li>
                            <li>The Girl Who Kicked the Hornets' Nest</li>
                        </ul>
                    </Col>
               </Row>
            </Container>
        )
    }
}

export default AboutMe;