import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import './experience.scss';
import KatLopezResume from '../../assets/KatrinaLopezResume.pdf';

const EXPERIENCE = [
    {
        date: 'March 2026 – Present',
        role: 'Revvity Signals • Senior Frontend Engineer',
        team: 'R&D – Biologics',
        url: 'https://www.ibm.com/training/',
        // shortInfo:
        //     'Build and style various web pages to serve IBM product training to clients. Work closely with developers and stakeholders to meet client needs and add functionality for internal teams.',
        tags: ['ReactJS', 'Javascript', 'HTML & SCSS'],
    },
    {
        date: 'June 2023 – December 2025',
        role: 'IBM • Software Engineer & UI/UX Designer',
        team: 'Global Sales',
        url: 'https://www.ibm.com/training/',
        shortInfo:
            'Build and style various web pages to serve IBM product training to clients. Work closely with developers and stakeholders to meet client needs and add functionality for internal teams.',
        tags: ['ReactJS', 'Node.js', 'Javascript', 'IBM Db2', 'HTML & SCSS'],
    },
    {
        date: 'May 2021 – June 2023',
        role: 'IBM • Software Engineer & UI/UX Designer',
        team: 'IBM Security: Security Learning Services',
        url: 'https://www.ibm.com/',
        shortInfo:
            'Focused on streamlining course content developer work streams through new features on internal tools and writing scripts for metric dashboards. Modernized client-facing user interface with IBM Carbon Design System.',
        tags: ['PHP', 'MySQL', 'Javascript', 'jQuery', 'HTML & SCSS'],
    },
    {
        date: 'June – Aug 2019',
        role: 'TCW Group • Information Technology Intern',
        team: 'Information Technology',
        url: 'https://www.tcw.com/',
        shortInfo:
            'Upgraded and deployed client relationship manager UI from Salesforce Classic to Salesforce Lightning Experience. Presented proof-of-concepts to TCW senior representatives and directors.',
        tags: ['Salesforce', 'MySQL'],
    },
];

export default function Experience() {
    return (
        <>
            <div className='exp-wrapper'>
                <h2>Experience</h2>
                <div className='exp-cards'>
                    {EXPERIENCE.map((exp, i) => (
                        <Card key={i} exp={exp} type='experience' />
                    ))}
                </div>
                <a href={KatLopezResume} className='resume' target='_blank' rel='noopener'>
                    View my full resumé <FontAwesomeIcon icon={faArrowRight} className='icon' />
                </a>
            </div>
            <div className='edu-wrapper'>
                <h2>Education</h2>
                <div className='exp-cards'>
                    <Card />
                </div>
            </div>
        </>
    );
}
