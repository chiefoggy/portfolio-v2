import { getPostData, imageMetadataPlugin } from '../../../lib/markdown';
import { Container } from '../../../components/Container';
import { Carousel } from '../../../components/Carousel';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const postData = await getPostData(id);
    return {
        title: `${postData.title} - Soin Wei Dong`,
        description: postData.description,
    };
}

export default async function Post({ params }) {
    const { id } = await params;
    const postData = await getPostData(id);

    return (
        <Container className={styles.container}>
            <header className={styles.header}>
                <time className={styles.date}>
                    {new Date(postData.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </time>
                <h1 className={styles.title}>{postData.title}</h1>
                <div className={styles.tags}>
                    {postData.tags && postData.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </header>

            <article className={styles.content}>
                <MDXRemote 
                    source={postData.content} 
                    components={{ Carousel }} 
                    options={{
                        mdxOptions: {
                            remarkPlugins: [imageMetadataPlugin],
                        }
                    }}
                />
            </article>
        </Container>
    );
}
