import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectTile = (props) => {
    const project = props.project;
    let className = project.style;
    if (project.style) className += " title-card d-flex";

    return(
        <Row className="px-5 py-3">
            <Col xl={5} lg={6} md={12} className="d-flex justify-content-center">
                <a href={project.link}>
                    <div className={className}>
                        <div className="my-auto w-100">
                            <p className="title-card-header text-center">{project.project}</p>
                            <div className="d-flex justify-content-center">
                                <img src={project.logo} className="title-card-logo float-start me-2" alt={project.logoAlt}></img>
                                <p className="title-card-subheader">{project.company}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
            <Col className="d-flex desc">
                <div className="my-auto">
                    <h3>{project.type}</h3>
                    <h6 className="text-black-50">{project.company}</h6>
                    <p>{project.desc}</p>
                </div>
            </Col>
        </Row>  
    )
}

export default ProjectTile;