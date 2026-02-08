import { getSortedPostsData } from '../../lib/markdown';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../../components/Container';
import styles from './page.module.css';

export const metadata = {
    title: 'Blog',
    description: 'A place to pen down my thoughts.',
};

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export default function Blog() {
    // Check if we have posts data, if not handle gracefully or mock
    let allPostsData = [];
    try {
        allPostsData = getSortedPostsData();
    } catch (e) {
        console.warn("Could not load posts:", e);
    }

    const featuredPost = allPostsData.find(post => post.featured);
    const otherPosts = allPostsData.filter(post => post.id !== (featuredPost?.id));

    return (
        <Container className={styles.mainContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    My thoughts.
                </h1>
                <p className={styles.intro}>
                    Trying to write (slightly) long(er)-form content to reduce brain atrophy from AI usage
                </p>
            </header>

            <div className={styles.grid}>
                {/* Featured Post */}
                {featuredPost && (
                    <Link href={`/posts/${featuredPost.id}`} className={styles.featuredCard}>
                        {(featuredPost.bannerImage || featuredPost.image) && (
                            <div className={styles.featuredImageWrapper}>
                                <Image
                                    src={featuredPost.bannerImage || featuredPost.image}
                                    alt={featuredPost.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={styles.cardImage}
                                    style={{ width: '100%', height: 'auto' }}
                                    priority
                                />
                            </div>
                        )}
                        <div className={styles.featuredContent}>
                            <time className={styles.cardDate} dateTime={featuredPost.date}>
                                {formatDate(featuredPost.date)}
                            </time>
                            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                            <p className={styles.featuredDescription}>{featuredPost.description}</p>
                        </div>
                    </Link>
                )}

                {/* Other Posts */}
                {otherPosts.map(({ id, date, title, description, image, bannerImage }) => (
                    <Link key={id} href={`/posts/${id}`} className={styles.card}>
                        {(bannerImage || image) && (
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={bannerImage || image}
                                    alt={title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={styles.cardImage}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        )}
                        <div className={styles.cardContent}>
                            <time className={styles.cardDate} dateTime={date}>
                                {formatDate(date)}
                            </time>
                            <h2 className={styles.cardTitle}>{title}</h2>
                            <p className={styles.cardDescription}>{description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
}
