import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/profile.jpg"
                    alt="Soin Wei Dong"
                    width={80}
                    height={80}
                    className={styles.profileImage}
                    priority
                />
            </div>
            <h1 className={styles.heading}>
                Hello, I'm Wei Dong.
            </h1>
            <p className={styles.subtitle}>
                Software developer, tinkerer, learner.
            </p>
            <div className={styles.bio}>
                <p>
                    I'm Wei Dong, a JC graduate who loves building things with code.
                </p>
                <p>
                    Co-founded <a href="https://www.projectquik.co" target="_blank" rel="noopener noreferrer">Project Quik</a> to make game development faster and easier for indie creators
                </p>
                <p>
                    Currently interning at <a href="https://aetherraid.dev" target="_blank" rel="noopener noreferrer">AETHER</a>.
                </p>
            </div>
            <div className={styles.socials}>
                <a href="mailto:soinweidong@gmail.com" className={styles.socialLink} aria-label="Email">
                    <FiMail />
                </a>
                <a href="https://github.com/chiefoggy" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/soinweidong" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <FiLinkedin />
                </a>
                <a href="https://instagram.com/weidongsoin" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                    <FiInstagram />
                </a>
            </div>
        </section>
    );
}
