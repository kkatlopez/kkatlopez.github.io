import { useState } from 'react';
import Actions from './Actions';
import ProjectDetail from './ProjectDetail';
import { Container, Row } from 'react-bootstrap';
import projects from './assets/projects.json';

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
                <Row>
                    <p>&#128679; Under construction!</p>
                    {/* { projects.map((detail, i) =>
                        <ProjectDetail proj={detail} key={i} />
                    )} */}
                </Row>
            : null }
        </Container>
    );
}

export default Projects;
