import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectHeader from './project-header';
import '../../App.css';
import '../../css/projects.css';
import Lightbox from "./lightbox";

const SLAP = () => {

    const project = {
        project: "Security Learning Academy Portal",
        logo: "/img/ibm-sec-logo.png",
        logoAlt: "IBM Security Logo",
        style: "header-ibm"
    }

    const imgSLAPDash = {
        img: "/img/slap-dashboard.png",
        alt: "SLAP Dashboard"
    }

    const imgSLAPEdit = {
        img: "/img/slap-edit.png",
        alt: "SLAP Edit Course"
    }

    return(
        <Container fluid>
            <ProjectHeader project={project}/>
            <Container>
                <Row className="p-5">
                    <h5 className="fw-bold">What is the Security Learning Academy Portal?</h5>
                    <p>The Security Learning Academy Portal, or SLAP, is an internal tool used for tracking courses and their lifecycles for the Security Learning Academy (SLA). Development for courses start and end with SLAP, which tracks all critical information such as its author(s), available language(s), level, and location on the SLA.</p>
                    <p>My biggest contributions to SLAP are redesigning the UI and implementing new features to ease the end-user experience.</p>
                    <hr/>
                    <h5 className="fw-bold">UI Redesign</h5>
                    <p>With the use of Mustache templates, I redesigned a majority of the site's pages to have a modern look as well as create a more seamless user experience. My main focuses were on the dashboard and course edit pages.</p>
                    <div className="slap-pages">
                        {/* DASHBOARD: */}
                        <Row>
                            <Col xl={8}>
                                <h6 className="fw-semibold"><span className="border-bottom border-dark">Dashboard</span></h6>
                                <p>The dashboard is each user's default landing page. Users will see the courses they are assigned as well as notices that require their attention.</p>
                                <p>Before the redesign, the dashboard used default Bootstrap cards that restrained the amount of information that could be presented. It also lacked the navigation to find necessary information. <strong>To solve this issue,</strong> information is now listed vertically in tables with a left-side navigation.</p>
                            </Col>
                            <Col className="img-container">
                                <Lightbox img={imgSLAPDash}/>
                            </Col>
                        </Row>
                        {/* COURSE EDIT */}
                        <Row>
                            <Col xl={8}>
                                <h6 className="fw-semibold"><span className="border-bottom border-dark">Editing Courses</span></h6>
                                <p>Every course on the <a href="https://securitylearningacademy.com">Security Learning Academy</a> has a course record on SLAP, allowing team members to view its details.</p>
                                <p>Like the dashboard, course edit pages also lacked navigation before the redesign. I often found myself using the browser's "Find" feature to locate certain course details. <strong>To solve this issue,</strong> I implemented a left-side navigation bar that allows users to quickly get to the section they need to view.<br/>From a codebase perspective, I created further distinction for the 12 sections available on each page with their own <strong>separate files,</strong> which made it easier to modify sections as needed. Previously, the mark-up was in a single file, making it difficult to locate certain sections when implementing other features.</p>
                            </Col>
                            <Col className="img-container">
                                <br/><Lightbox img={imgSLAPEdit}/>
                            </Col>
                        </Row>
                    </div>
                    <hr/>
                    <h5 className="fw-bold">Full-stack Development</h5>
                    <p>With the use of Mustache templates, I redesigned a majority of the site's pages to have a modern look as well as create a more seamless user experience.</p>
                </Row>
            </Container>
        </Container>
    )
}

export default SLAP;