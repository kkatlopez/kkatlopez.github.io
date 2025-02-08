import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return props.type === 'experience' ? (
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
    ) : (
        <>
            <a className='exp-card'>
                <span className='date'>2021 – 2022</span>
                <div className='info'>
                    <h3>Rensselaer Polytechnic Institute</h3>
                    <h4>Master of Science in Information Technology</h4>
                    <ul>
                        <li>Concentration in web science</li>
                        <li>Gamma Nu Eta National Information Technology Honor Society</li>
                    </ul>
                </div>
            </a>
            <a className='exp-card'>
                <span className='date'>2018 – 2021</span>
                <div className='info'>
                    <h3>Rensselaer Polytechnic Institute</h3>
                    <h4>Bachelor of Science in Information Technology and Web Science</h4>
                    <ul>
                        <li>
                            Graduated <em>Cum Laude</em>
                        </li>
                        <li>Concentration in management information systems</li>
                        <li>NCAA DIII Women&apos;s Swimming & Diving varsity athlete</li>
                    </ul>
                </div>
            </a>
        </>
    );
}
