import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ExperienceCard from './ExperienceCard';
import './experience.scss';
import KatLopezResume from '../../assets/KatrinaLopezResume.pdf';

const EXPERIENCE = [
    {
        date: '2023 – Present',
        role: 'IBM • Software Engineer & UI/UX Designer',
        team: 'Global Sales Enablement: Learning Experience Team',
        url: 'https://www.ibm.com/',
        shortInfo:
            'Build and style various web pages to serve IBM product training to clients. Work closely with developers and stakeholders to meet client needs and add functionality for internal teams.',
        tags: ['Javascript', 'React Native', 'Node.js', 'Db2', 'HTML & SCSS'],
        additionalUrls: ['https://www.ibm.com/training/'],
    },
    {
        date: '2021 – 2023',
        role: 'IBM • Software Engineer & UI/UX Designer',
        team: 'IBM Security: Security Learning Services (SLS)',
        url: 'https://www.ibm.com/',
        shortInfo:
            'Focused on streamlining course content developer workstreams through new features on internal tools and writing scripts for metric dashboards. Modernized client-facing user interface with IBM Carbon Design System.',
        tags: ['PHP', 'SQL', 'Javscript', 'jQuery', 'HTML & SCSS'],
    },
    {
        date: 'June – Aug 2019',
        role: 'TCW Group • Information Technology Intern',
        team: 'Information Technology',
        url: 'https://www.tcw.com/',
        shortInfo:
            'Upgraded and deployed client relationship manager UI from Salesforce Classic to Salesforce Lightning Experience. Presented proof-of-concepts to TCW senior representatives and directors.',
        tags: ['Salesforce'],
    },
];

export default function Experience() {
    return (
        <section className='experience' id='experience'>
            <div className='exp-wrapper'>
                <h2>Experience</h2>
                <div className='exp-cards'>
                    {EXPERIENCE.map((exp, i) => (
                        <ExperienceCard key={i} exp={exp} />
                    ))}
                </div>
                <a href={KatLopezResume} className='resume' target='_blank' rel='noopener'>
                    View my full resumé <FontAwesomeIcon icon={faArrowRight} className='icon' />
                </a>
            </div>
            <div className='edu-wrapper'>
                <h2>Education</h2>
            </div>
        </section>
    );
}
