import Timeline from '../../components/Timeline';

const experienceData = [
    {
        role: 'Chief Admin Officer (CAO)',
        company: 'Sphere',
        date: '2021 - Present',
        description: 'Leading administrative operations and ensuring smooth organizational workflow across the team.',
    },
    {
        role: 'Chief Marketing Officer (CMO)',
        company: 'SST INC',
        date: '2021 - 2022',
        description: 'Spearheaded marketing initiatives for the school-based technology incubator, managing social media and outreach events.',
    },
    {
        role: 'Member',
        company: 'Robotics @ APEX',
        date: '2021',
        description: 'Participated in competitive robotics, learning engineering principles and programming logic.',
    },
    {
        role: 'Participant',
        company: 'Hack-n-Flag',
        date: '2022 - 2023',
        description: 'Engaged in cybersecurity workshops and CTF challenges to build foundational security knowledge.',
    },
];

export default function Experience() {
    return (
        <div style={{ padding: '8rem 0 4rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Experience</h1>
            <Timeline items={experienceData} />
        </div>
    );
}
