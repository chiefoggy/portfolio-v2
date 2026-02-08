import Link from 'next/link';
import styles from './ArticleList.module.css';

export default function ArticleList({ articles }) {
    return (
        <div className={styles.list}>
            {articles.map((article) => (
                <Link href={`/blog/${article.id}`} key={article.id} className={styles.card}>
                    <div className={styles.imagePlaceholder} />
                    <div className={styles.content}>
                        <div className={styles.meta}>
                            <span className={styles.tag}>Blog</span>
                            <span className={styles.date}>{article.date}</span>
                        </div>
                        <h3 className={styles.title}>{article.title}</h3>
                        <p className={styles.excerpt}>{article.description}</p>
                        <span className={styles.readMore}>Read More →</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
