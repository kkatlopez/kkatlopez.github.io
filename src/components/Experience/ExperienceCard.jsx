import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceCard(props) {
    return (
        <a className='exp-card' href={props.exp.url && props.exp.url} target='_blank' rel='noopener'>
            <span className='date'>{props.exp.date}</span>
            <div className='info'>
                <h3>
                    {props.exp.role}
                    <FontAwesomeIcon icon={faArrowRight} className='icon' />
                </h3>
                <h4>{props.exp.team}</h4>
                <p className='info-text'>{props.exp.shortInfo}</p>
                <div className='tags'>
                    {props.exp.tags.map((tag, i) => (
                        <span className='tag' key={i}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
