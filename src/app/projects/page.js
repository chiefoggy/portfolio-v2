import { Container } from '../../components/Container';
import ProjectsSection from '../../components/ProjectsSection';
import styles from './page.module.css';

export const metadata = {
    title: 'Projects'
};

export default function Projects() {
    return (
        <Container className={styles.mainContainer}>
            <ProjectsSection />
        </Container>
    );
}
