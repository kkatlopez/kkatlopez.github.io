import Actions from './Actions';
import { Container, Row } from 'react-bootstrap';
import '../styles/header.scss';

function Education() {
    return (
        <Container className="window h-100">
            <Actions name="Education" />
            {/* <h2>Education</h2> */}
            <div className="d-flex flex-column">
                <Row>
                    <div className="d-md-flex justify-content-md-between">
                        <strong>Rensselaer Polytechnic Institute</strong>
                        <p className="d-none d-md-block">Troy, New York</p>
                    </div>
                    <div className="d-md-flex justify-content-md-between">
                        <strong><i>Master of Science in Information Technology</i></strong>
                        <p className="d-none d-md-block">GPA: 4.0</p>
                    </div>
                    <ul className="ps-5">
                        <li>Concentration in web science</li>
                        <li>Gamma Nu Eta National Information Technology Honor Society</li>
                    </ul>
                </Row>
                <Row>
                    <div className="d-md-flex justify-content-md-between">
                        <strong>Rensselaer Polytechnic Institute</strong>
                        <p className="d-none d-md-block">Troy, New York</p>
                    </div>
                    <div className="d-md-flex justify-content-md-between">
                        <strong><i>Bachelor of Science in Information Technology and Web Science</i></strong>
                        <p className="d-none d-md-block">GPA: 3.65</p>
                    </div>
                    <ul className="ps-5">
                        <li>Graduated <i>Cum Laude</i></li>
                        <li>Concentration in management information systems</li>
                        <li>NCAA DIII Women's Swimming & Diving varsity athlete</li>
                    </ul>
                </Row>
            </div>
        </Container>
    );
}

export default Education;
