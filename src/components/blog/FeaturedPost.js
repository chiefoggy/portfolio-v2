import Link from 'next/link';
import styles from './FeaturedPost.module.css';

export default function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder} />
                {/* Replace with actual Image component when we have images */}
            </div>
            <div className={styles.content}>
                <span className={styles.label}>Featured Story</span>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.description}</p>

                <div className={styles.meta}>
                    <span className={styles.date}>{post.date}</span>
                    <Link href={`/blog/${post.id}`} className={styles.button}>
                        Read Full Article →
                    </Link>
                </div>
            </div>
        </div>
    );
}
