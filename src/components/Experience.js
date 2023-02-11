import Actions from './Actions';
import ExperienceDetail from './ExperienceDetail';
import { Container } from 'react-bootstrap';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import '../styles/experience.scss';
import experience from './assets/experience.json';

function Experience() {
    const customTheme = {
        borderDotColor: '#ffffff',
        descriptionColor: '#262626',
        dotColor: '#d0cdc4',
        eventColor: '#965500',
        lineColor: '#d0cdc4',
        subtitleColor: '#7c7c7c',
        titleColor: '#405b73',
        yearColor: '#405b73',
    };
      
    return (
        <Container className="window experience">
            <Actions name="Experience" />
            {/* <h2>Experience</h2> */}
            <VerticalTimeline layout="1-column-left" lineColor="#d4d4d4">
                { experience.map((detail, i) =>
                    <ExperienceDetail exp={detail} key={i} />
                )}
                <ExperienceDetail />
            </VerticalTimeline>
        </Container>
    );
}

export default Experience;
