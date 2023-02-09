import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import '../../css/experience.css';

class Experience extends Component {
    render() {
        return(
            <Container fluid>
                <Row className="d-flex px-5 py-0 header">
                    <Col className="my-auto">
                        <h1 className="display-3 fw-bold">Experience</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Experience;