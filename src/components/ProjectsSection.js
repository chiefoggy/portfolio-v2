'use client';

import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const PROJECTS = [
    {
        title: 'Rewind',
        description: `A 3D web app that brings Singapore's history to life.`,
        tags: ['Hackathon', 'Web', '3D'],
        category: 'Web Dev',
        image: '/assets/rewind-homepage.jpg',
        githubLink: 'https://github.com/SY-Chai/HacknRoll2026',
        demoLink: 'https://hacknroll26-rewind.vercel.app/'
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Featured Projects</h2>

                <div className={styles.grid}>
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
