import { useState } from 'react';
import Actions from './Actions';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/skills.scss';
import skills from './assets/skill.json';

function TechnicalSkills() {

    return (
        <Container className="window">
            <Actions name="Technical Skills" />
            <Row>
                <div className="d-flex flex-wrap">
                    { skills.map((skill, i) =>
                        <Col xs="2" md="3" xl="3" className="skill p-1 my-2">
                            <img src={skill.image} alt={skill.alt} className="img-fluid skill-img img-rounded" key={i} />
                            <div className="skill-title-layer">
                                <p className="skill-title">{skill.skill}</p>
                            </div>
                        </Col>
                    )}
                </div>
            </Row>
        </Container>
    );
}

export default TechnicalSkills;
