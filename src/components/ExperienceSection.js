'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ExperienceSection.module.css';

const EXPERIENCE_DATA = [
    {
        id: 'aether',
        role: 'AI Researcher',
        company: 'AETHER',
        date: 'Dec 2025 - Present',
        description: ` 
        Currently interning at AETHER, where I previously revamped the website aetherraid.dev and am currently working on using language models to build a performance evaluation system.
        `,
        tags: ['AI Agents', 'Cognitive Science', 'Human-Machine Teaming'],
        gallery: []
    },
    {
        id: 'quik',
        role: 'Co-Founder',
        company: 'Project Quik',
        date: '2023 - Present',
        description: `
        • Create and manage marketing content, including Instagram posts and investor/client pitch decks, to support brand growth and engagement.

        • Oversee day-to-day administrative operations, ensuring smooth internal workflows and efficient task execution.

        • Collaborate directly with the CEO and software engineering team to identify challenges and implement solutions across business and product functions.

        • Participated in the National Youth Council (NYC)'s Youth Action Challenge (YAC) Season 6 (2024-2025), where we learnt more about honing our business idea and product, and also had meetings with mentors to further enhance our product fit and marketing. Ended off with a 5-minute group pitch to a panel of judges about our product - Sphere Kit.

        Visit projectquik.co!
        `,
        tags: ['Startup', 'Full Stack', 'AI'],
        gallery: ['/assets/yac-group-pic.jpg']
    }
];

export default function ExperienceSection() {
    const [activeId, setActiveId] = useState('aether');
    const [selectedImage, setSelectedImage] = useState(null);

    const activeItem = EXPERIENCE_DATA.find(item => item.id === activeId);

    return (
        <section id="experience" className={styles.section}>
            <div className={styles.innerContainer}>
                <h2 className={styles.title}>Work Experience</h2>

                <div className={styles.gridContainer}>
                    {/* Left List Pane */}
                    <div className={styles.list}>
                        {EXPERIENCE_DATA.map((item) => (
                            <div
                                key={item.id}
                                className={`${styles.listItem} ${activeId === item.id ? styles.activeItem : ''}`}
                                onClick={() => setActiveId(item.id)}
                            >
                                <span className={styles.itemRole}>{item.role}</span>
                                <span className={styles.itemCompany}>{item.company}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Details Pane */}
                    <div className={styles.detailPane}>
                        <h3 className={styles.roleTitle}>
                            {activeItem.role}
                            <span className={styles.company}> @ {activeItem.company}</span>
                        </h3>
                        <p className={styles.period}>{activeItem.date}</p>

                        <div className={styles.description}>
                            {activeItem.description}
                        </div>

                        {/* Gallery Section */}
                        {activeItem.gallery && activeItem.gallery.length > 0 && (
                            <div className={styles.gallery}>
                                {activeItem.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.galleryItem}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${activeItem.company} gallery image ${idx + 1}`}
                                            fill
                                            className={styles.galleryImg}
                                            sizes="(max-width: 768px) 100vw, 300px"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}


                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                    <div className={styles.modalImageWrapper}>
                        <Image
                            src={selectedImage}
                            alt="Expanded view"
                            fill
                            className={styles.modalImage}
                            quality={100}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
