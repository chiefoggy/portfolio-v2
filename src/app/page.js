import { Container } from '../components/Container';
import Hero from '../components/Hero';
import Photos from '../components/Photos';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import styles from './page.module.css';

export default function Home() {
    return (
        <Container className={styles.mainContainer}>
            <Hero />
            <Photos />
            <div className={styles.contentWrapper}>
                <ExperienceSection />
                <EducationSection />
            </div>
        </Container>
    );
}
