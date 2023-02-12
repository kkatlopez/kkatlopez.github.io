import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../styles/experience.scss';

function ExperienceDetail( {exp} ) {
    var functions = exp?.functions.map((f, i) =>
        <li className="mb-2" key={i}>{f}</li>
    );
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#1982FC', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1982FC' }}
            date={exp?.date}
            iconStyle={{ background: '#1982FC', color: '#fff' }}
        >
            <div className="exp d-xs-block d-md-flex justify-content-md-between">
                <div>
                    <h3 className="vertical-timeline-element-title">{exp?.company}</h3>
                    <p className="mt-0 mb-2 exp-job">{exp?.job}</p>
                </div>
                <h4 className="vertical-timeline-element-subtitle mb-2">{exp?.location}</h4>
            </div>
            <ul className="mb-0 d-none d-md-block exp-functions">{functions}</ul>
        </VerticalTimelineElement>
    );
}

export default ExperienceDetail;
