'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ExperienceSection.module.css'; // Reusing styles to maintain consistency

const EDUCATION_DATA = [
    {
        id: 'acjc',
        role: 'Junior College',
        company: 'Anglo-Chinese Junior College',
        date: '2024 - 2025',
        description: `
        Pursued Physics, Mathematics, Computing, and Economics at the H2 level and General Paper at the H1 level.
        
        As a STEM Council Member, I spearheaded the automation of certificate generation using Google Apps Script, significantly reducing manual effort and minimizing errors.

        Key Achievements:
        • A*STAR Science Award (JC)
        • CCC-CDC Education Merit Award (2024, 2025) - Top 25% in School Level`,
        gallery: ['/assets/acjc-astar-poster.jpg']
    },
    {
        id: 'sst',
        role: 'Secondary School',
        company: 'School of Science and Technology',
        date: '2020 - 2023',
        description: `
        Specialised in Computing as an Applied Subject. Active member of Robotics @ APEX and SST Inc.

        As Chief Marketing Officer (CMO) of SST Inc. (2021-2022), I curated Inc's digital presence and managed content strategy. 

        Awards:
        • Top GCE O-Level Performer (Raw L1R5 ≤ 9)
            • SST CCA Outstanding Performance Award (Team) - Robotics @ APEX (First Lego League)`,
        gallery: ['/assets/fll-2021-grp.jpg']
    }
];

export default function EducationSection() {
    const [activeId, setActiveId] = useState('acjc');
    const [selectedImage, setSelectedImage] = useState(null);

    const activeItem = EDUCATION_DATA.find(item => item.id === activeId);

    return (
        <section id="education" className={styles.section}>
            <div className={styles.innerContainer}>
                <h2 className={styles.title}>Education</h2>

                <div className={styles.gridContainer}>
                    {/* Left List Pane */}
                    <div className={styles.list}>
                        {EDUCATION_DATA.map((item) => (
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
