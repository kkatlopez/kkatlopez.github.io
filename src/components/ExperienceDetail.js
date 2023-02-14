import { Badge } from 'react-bootstrap';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../styles/experience.scss';

function ExperienceDetail( {exp} ) {
    var functions = exp?.functions.map((f, i) =>
        <li className="mb-2" key={i}>{f}</li>
    );

    var tags = exp?.tags.map((t, i) =>
        <Badge pill className="me-2" key={i}>{t}</Badge>
    );

    return (
        <VerticalTimelineElement
            className={`vertical-timeline-element ${exp?.class}`}
            date={exp?.date}
            icon={<img src={exp?.image} className="img-fluid m-auto" alt={`${exp?.company} logo`}/> }
        >
            <div className="mb-2 tags">
                {tags}
            </div>
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
