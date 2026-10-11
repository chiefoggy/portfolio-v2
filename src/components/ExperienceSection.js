'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ExperienceSection.module.css';

const TIMELINE_DATA = [
    {
        id: 'aether',
        type: 'Work',
        role: 'Software Developer Intern',
        company: 'AETHER',
        logo: '/assets/aether-logo.png',
        date: 'Dec 2025 - Mar 2026',
        description: `• Lead developer of the current site (https://aether.sutd.edu.sg) with modern web technologies, driving the development and enhancement of the site using modern web technologies to improve functionality and user experience.

• Designed and implemented AI evaluation pipelines for an experimental Air Traffic Controller (ATC) training system, leveraging the DSPy framework to benchmark model performance on route compliance, safety adherence, and operational accuracy.`,
        achievements: [],
        gallery: []
    },
    {
        id: 'quik',
        type: 'Work',
        role: 'Co-Founder',
        company: 'Project Quik',
        logo: '/assets/quik-logo.png',
        date: '2023 - Present',
        description: `• Create and manage marketing content, including Instagram posts and investor/client pitch decks, to support brand growth and engagement.

• Oversee day-to-day administrative operations, ensuring smooth internal workflows and efficient task execution.

• Collaborate directly with the CEO and software engineering team to identify challenges and implement solutions across business and product functions.

• Participated in the National Youth Council (NYC)'s Youth Action Challenge (YAC) Season 6 (2024-2025), where we learnt more about honing our business idea and product, and also had meetings with mentors to further enhance our product fit and marketing. Ended off with a 5-minute group pitch to a panel of judges about our product - Sphere Kit.

Visit https://projectquik.co to learn more about us!`,
        achievements: ['NYC Youth Action Challenge (Season 6)'],
        gallery: ['/assets/yac-group-pic.jpg']
    },
    {
        id: 'acjc',
        type: 'Education',
        role: 'Junior College',
        company: 'Anglo-Chinese Junior College',
        date: '2024 - 2025',
        description: `Pursued Physics, Mathematics, Computing, and Economics at the H2 level and General Paper at the H1 level.

As a STEM Council Member, I spearheaded the automation of certificate generation using Google Apps Script, significantly reducing manual effort and minimizing errors.

As an awardee of the A*STAR Science Award (JC), I had the opportunity to work on implementing algorithms from the research paper "Optimizing Shot Assignment in Variational Quantum Eigensolver Measurement". My main responsibility was translating theoretical concepts into code, ensuring the implementation was accurate and efficient. I also validated my findings by comparing them with the original results from the researchers.

Key Achievements:
• A*STAR Science Award (JC)
• CCC-CDC Education Merit Award (2024, 2025) - Top 25% in School Level`,
        gallery: ['/assets/acjc-astar-poster.jpg']
    },
    {
        id: 'sst',
        type: 'Education',
        role: 'Secondary School',
        company: 'School of Science and Technology',
        date: '2020 - 2023',
        description: `Specialised in Computing as an Applied Subject. Active member of Robotics @ APEX and SST Inc.

As Chief Marketing Officer (CMO) of SST Inc. (2021-2022), I curated Inc's digital presence and managed content strategy.

Awards:
• Top GCE O-Level Performer (Raw L1R5 ≤ 9)
• SST CCA Outstanding Performance Award (Team) - Robotics @ APEX (First Lego League)`,
        gallery: ['/assets/fll-2021-grp.jpg']
    }
];

function formatText(text) {
    if (typeof text !== 'string') return text;
    const urlRegex = /(https?:\/\/[^\s)]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
        if (part.match(urlRegex)) {
            return (
                <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    {part}
                </a>
            );
        }
        return part;
    });
}

export default function ExperienceSection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const closeButtonRef = useRef(null);

    // Escape key + focus management for modal
    useEffect(() => {
        if (!selectedImage) return;

        const previouslyFocused = document.activeElement;
        closeButtonRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            previouslyFocused?.focus();
        };
    }, [selectedImage]);

    return (
        <section id="experience" className={styles.section} aria-label="Experience and Education">
            <div className={styles.innerContainer}>
                <h2 className={styles.title}>Experience & Education</h2>

                <div className={styles.timeline}>
                    {TIMELINE_DATA.map((item) => (
                        <article key={item.id} className={styles.timelineItem}>
                            <div className={styles.timelineDot} aria-hidden="true" />

                            <div className={styles.itemMeta}>
                                <span className={styles.period}>{item.date}</span>
                                <span className={styles.typeBadge}>{item.type}</span>
                            </div>

                            <div className={styles.itemHeader}>
                                {item.logo && (
                                    <div className={styles.logoWrapper}>
                                        <Image
                                            src={item.logo}
                                            alt={`${item.company} logo`}
                                            width={34}
                                            height={34}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                )}
                                <h3 className={styles.roleTitle}>
                                    {item.role} <span className={styles.company}>· {item.company}</span>
                                </h3>
                            </div>

                            {item.description && (
                                <div className={styles.description}>{formatText(item.description)}</div>
                            )}

                            {item.bullets && item.bullets.length > 0 && (
                                <ul className={styles.bulletList}>
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            )}

                            {item.achievements && item.achievements.length > 0 && (
                                <div className={styles.achievementsWrapper}>
                                    <div className={styles.achievementsList}>
                                        {item.achievements.map((achievement, idx) => {
                                            const isFeatured = item.featuredAchievement === achievement;
                                            return (
                                                <span
                                                    key={idx}
                                                    className={isFeatured ? styles.featuredChip : styles.chip}
                                                >
                                                    {achievement}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {item.gallery && item.gallery.length > 0 && (
                                <div className={styles.gallery}>
                                    {item.gallery.map((img, idx) => (
                                        <button
                                            key={idx}
                                            className={styles.galleryItem}
                                            onClick={() => setSelectedImage(img)}
                                            aria-label={`View ${item.company} photo ${idx + 1} in full size`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${item.company} photo ${idx + 1}`}
                                                fill
                                                className={styles.galleryImg}
                                                sizes="(max-width: 640px) 100vw, 200px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className={styles.modalOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image preview"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        ref={closeButtonRef}
                        className={styles.closeButton}
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image preview"
                    >
                        ×
                    </button>
                    <div
                        className={styles.modalImageWrapper}
                        onClick={(e) => e.stopPropagation()}
                    >
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
