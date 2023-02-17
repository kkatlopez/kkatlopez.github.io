import { useState } from 'react';
import Actions from './Actions';
import { Container, Row, Col, Image, Button, Modal, Badge } from 'react-bootstrap';
import '../styles/projects.scss';

function ProjectDetail( {proj} ) {
    const [ showModal, setShowModal ] = useState(false);

    const modalVisible = () => {
        setShowModal(showModal => !showModal);
    }

    return (
        <Col md="6" lg="4" className="d-flex flex-column mb-4">
            <Image fluid thumbnail src={proj.img} className="mb-2" alt={proj.name} />
            <Button variant="link" onClick={() => modalVisible()}>{proj.name}</Button>
            <p className="mb-3 h-100">{proj.desc}</p>
            { showModal ?
                <Modal show={showModal} onHide={modalVisible} centered animation={false}>
                    <Container className="window project">
                        <div onClick={() => modalVisible()}
                            style={{ position: "sticky", top: "0", bottom: "0", zIndex: "1000"
                        }}
                        >
                            <Actions name={proj.name} />
                        </div>

                        <div className="tags mb-3">
                            { proj.tags.map((tag, i) =>
                                <Badge pill className="me-2" key={i}>{tag}</Badge>
                            )}
                        </div>
                        <p className="mb-3">{proj.descLong}</p>
                        <p><strong>Contributions:</strong></p>
                        <ul>
                            { proj.infoList.map((item, i) => 
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                        <Row className="d-flex images pt-2">
                            { proj.imgList.map((item, i) =>
                                <Col xs="12" xl="6" className="mx-auto mb-3" key={i}>
                                    <Image src={item.img} fluid thumbnail alt={item.imgDesc} />
                                    <p className="text-center mt-1"><em>{item.imgDesc}</em></p>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </Modal>
            : null }
        </Col>
    );
}

export default ProjectDetail;
