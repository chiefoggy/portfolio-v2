import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, tags, image, githubLink, demoLink }) {
    const isImageUrl = image?.startsWith('/') || image?.startsWith('http');

    return (
        <div className={styles.card}>
            <div className={styles.imageHeader} style={!isImageUrl ? { background: image } : { position: 'relative', overflow: 'hidden' }}>
                {isImageUrl && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.links}>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <FiGithub />
                        </a>
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <FiExternalLink />
                        </a>
                    </div>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
