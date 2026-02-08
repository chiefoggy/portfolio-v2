import { FiGithub, FiLinkedin, FiRss, FiSearch } from 'react-icons/fi';
import styles from './BlogSidebar.module.css';

export default function BlogSidebar() {
    return (
        <aside className={styles.sidebar}>
            {/* Search */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Search Articles</h3>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Type keywords..." className={styles.searchInput} />
                </div>
            </div>

            {/* Popular Topics */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Popular Topics</h3>
                <div className={styles.tags}>
                    {['#React', '#Algorithms', '#Rust', '#DistributedSystems', '#WebDev', '#Cybersecurity'].map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            {/* Newsletter section removed */}

            {/* Connect */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Connect</h3>
                <div className={styles.socials}>
                    <a href="#" className={styles.socialLink}><FiGithub /></a>
                    <a href="#" className={styles.socialLink}><FiLinkedin /></a>
                    <a href="#" className={styles.socialLink}><FiRss /></a>
                </div>
            </div>
        </aside>
    );
}
