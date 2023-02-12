import { useState } from 'react';
import Actions from './Actions';
import ExperienceDetail from './ExperienceDetail';
import { Container } from 'react-bootstrap';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import '../styles/experience.scss';
import experience from './assets/experience.json';

function Experience() {
    const [ show, setShow ] = useState(true);
    const [ showClass, setShowClass ] = useState("");
    const isVisible = () => {
        setShow(show => !show);
        setShowClass("invis");
    };
    // const customTheme = {
    //     borderDotColor: '#ffffff',
    //     descriptionColor: '#262626',
    //     dotColor: '#d0cdc4',
    //     eventColor: '#965500',
    //     lineColor: '#d0cdc4',
    //     subtitleColor: '#7c7c7c',
    //     titleColor: '#405b73',
    //     yearColor: '#405b73',
    // };
      
    return (
        <Container className={show ? `window experience` : `window experience ${showClass}`}>
            <div onClick={() => isVisible()}
                style={{ position: "sticky", top: "0", bottom: "0", zIndex: "1000"
                }}
            >
                <Actions name="Experience"/>
            </div>
            { show ? 
                <VerticalTimeline layout="1-column-left" lineColor="#d4d4d4" animate={false}>
                    { experience.map((detail, i) =>
                        <ExperienceDetail exp={detail} key={i} />
                    )}
                    <ExperienceDetail />
                </VerticalTimeline>
            : null }
        </Container>
    );
}

export default Experience;
