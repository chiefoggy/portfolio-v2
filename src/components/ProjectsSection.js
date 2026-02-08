'use client';

import { useState } from 'react';
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
    {
        title: 'Telegram Stock Bot',
        description: `Python script to scrape for stock prices and outputs it upon Telegram message prompt.`,
        tags: ['Python', 'Telegram API'],
        category: 'Backend Systems',
        image: '/assets/chiefstonks.jpg',
        githubLink: 'https://github.com/chiefoggy/telegram-stock-bot'
    },

];

const CATEGORIES = ['All Projects', 'Web Dev', 'Mobile Apps', 'AI / Machine Learning', 'Backend Systems'];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredProjects = activeCategory === 'All Projects'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Featured Projects</h2>

                <div className={styles.filters}>
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
