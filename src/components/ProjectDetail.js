import { Row, Col, Card, Image } from 'react-bootstrap';

function ProjectDetail( {proj} ) {
    
    return (
        <Row>
            <p>{proj.name}</p>
        </Row>
    );
}

export default ProjectDetail;
