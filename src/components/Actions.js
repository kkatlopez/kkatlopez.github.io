import { Row, Col } from 'react-bootstrap';

function Actions(name) {
    return (
        <Row className="d-flex sticky-top action-container">
            <Col className="d-flex action-btns ps-1">
                <div className="circle close"></div>
                <div className="circle minimize"></div>
                <div className="circle open"></div>
                <strong className="align-self-center ms-3">{name.name}</strong>
            </Col>
        </Row>
    );
}

export default Actions;
