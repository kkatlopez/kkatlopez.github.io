import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProjectHeader = (props) => {
    const project = props.project;
    let className = project.style;
    if (project.style) className += " d-flex px-5 py-0";

    return (
        <Row className={className}>
            <Col className="my-auto">
                <img src={project.logo} className="logo float-start me-4" alt={project.logoAlt}/>
                <h1 className="display-5 fw-bold">{project.project}</h1>
            </Col>
        </Row>
    )
}

export default ProjectHeader;