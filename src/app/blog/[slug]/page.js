import { getAllPostIds, getPostData } from '../../../lib/markdown';
import styles from './BlogPost.module.css';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export default async function Post({ params }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <h1 className={styles.title}>{postData.title}</h1>
                <div className={styles.date}>{postData.date}</div>
            </header>

            <div
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                className={styles.content}
            />
        </article>
    );
}
