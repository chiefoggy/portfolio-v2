import Image from 'next/image';
import styles from './WorkWidget.module.css';

const WORK_HISTORY = [
    {
        company: 'AETHER',
        role: 'Intern',
        start: '2025',
        end: 'Present',
        logo: '/logo-aether.png' // Placeholder
    },
    {
        company: 'Project Quik',
        role: 'Co-Founder',
        start: '2024',
        end: 'Present',
        logo: '/logo-quik.png' // Placeholder
    },

];

export default function WorkWidget() {
    return (
        <div className={styles.widget}>
            <h2 className={styles.header}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.icon}>
                    <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" />
                    <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" />
                </svg>
                Work
            </h2>
            <div className={styles.list}>
                {WORK_HISTORY.map((role, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles.logo}>
                            {/* Placeholder for company logo */}
                            <div style={{ width: '60%', height: '60%', background: '#d4d4d8', borderRadius: '50%' }} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.company}>{role.company}</div>
                            <div className={styles.roleWrapper}>
                                <div className={styles.role}>{role.role}</div>
                                <div className={styles.date}>{role.start} — {role.end}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
