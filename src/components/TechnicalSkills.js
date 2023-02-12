import { useState } from 'react';
import Actions from './Actions';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/skills.scss';
import skills from './assets/skill.json';

function TechnicalSkills() {
    const [ show, setShow ] = useState(true);
    const [ showClass, setShowClass ] = useState("");
    const isVisible = () => {
        setShow(show => !show);
        setShowClass("invis");
    };

    return (
        <Container 
            className={show ? `window` : `window ${showClass}`}
            style={{ height: show ? "" : "36px"}}
        >
            <div onClick={() => isVisible()}>
                <Actions name="Technical Skills" />
            </div>
            { show ? 
                <Row>
                    <div className="d-flex flex-wrap">
                        { skills.map((skill, i) =>
                            <Col xs="4" sm="3" md="3" xl="3" className="skill p-1 my-2" key={i}>
                                <img src={skill.image} alt={skill.alt} className="img-fluid skill-img img-rounded" key={i} />
                                <div className="skill-title-layer">
                                    <p className="skill-title">{skill.skill}</p>
                                </div>
                            </Col>
                        )}
                    </div>
                </Row>
            : null }
        </Container>
    );
}

export default TechnicalSkills;
