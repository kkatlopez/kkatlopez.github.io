import { useState } from 'react';
import Actions from './Actions';
import ProProjectDetail from './ProProjectDetail';
import PersonalProjectDetail from './PersonalProjectDetail';
import { Container, Accordion, Row } from 'react-bootstrap';
import proProjects from './assets/professional-projects.json';
import personalProjects from './assets/personal-projects.json';

function Projects() {
    const [ show, setShow ] = useState(true);
    const [ showClass, setShowClass ] = useState("");
    const isVisible = () => {
        setShow(show => !show);
        setShowClass("invis");
    };
    
    return (
        <Container className={show ? `window` : `window ${showClass}`}>
            <div onClick={() => isVisible()}
                style={{ position: "sticky", top: "0", bottom: "0", zIndex: "1000"
                }}
            >
                <Actions name="Projects"/>
            </div>
            { show ?
                <div className="projects">
                    <Accordion flush alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Professional</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    {proProjects.map((proj, i) => 
                                        <ProProjectDetail proj={proj} key={i}/>
                                    )}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Personal</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-3">These are projects I've completed in my free time to brush up on my technical skills.</p>
                                <Row>
                                    {personalProjects.map((proj, i) =>
                                        <PersonalProjectDetail proj={proj} key={i}/>
                                    )}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            : null }
        </Container>
    );
}

export default Projects;
