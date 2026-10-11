import Image from 'next/image';
import { Container } from '../../components/Container';
import styles from './page.module.css';

export const metadata = {
    title: 'About',
    description: `I'm Wei Dong. I live in Singapore, creating the future.`,
};

export default function About() {
    return (
        <Container className={styles.mainContainer}>
            <div className={styles.content}>
                {/* Left Column: Title + Bio */}
                <div className={styles.leftColumn}>
                    <h1 className={styles.title}>
                        Here's more about me!
                    </h1>

                    <div className={styles.bodyContent}>
                        <p>
                            I'm Wei Dong, a recent Junior College graduate who's always been curious about how things work and loves tinkering with stuff.
                        </p>
                        <p>
                            Growing up, I was always curious how various devices worked, which caused me to <s>break</s> tear apart various devices to understand their inner workings. This curiosity led me to join my Primary School's Robotics club, where I discovered that building and programming robots was incredibly fun.
                        </p>
                        <p>
                            I also wanted to build things that people could actually use, so I joined SST Incorporated. There, I learned app development and worked with my team to create products for our school community. I also curated its digital presence as Inc's Chief Marketing Officer ('21-'22).
                        </p>
                        <p>
                            As a recipient of the A*Star Science Award, I took part in a 5 week long Research Attachment Project, where I worked with a researcher and two teammates. We read through research papers, coded simulations to test their claims, and visualized the results using Python. I also submitted my findings to the Singapore Science and Engineering Fair in January 2025.
                        </p>
                        <p>
                            Now, I'm co-founding Project Quik, a startup building tools to make game development easier for indie developers. We're building tools that simplify the online game development process, making it faster and easier for creators to bring their ideas to life.
                        </p>
                        <p>
                            Previously, I interned at AETHER, where I gained valuable experience in software engineering and working on innovative projects.
                        </p>
                        <p>
                            I also enjoy participating in hackathons as they're a perfect sandbox to try out something new under pressure. At Hack &amp; Roll 2026, my team and I placed Top 9 with Rewind, a 3D web app that brings Singapore's history to life. We built it in 24 hours using technologies that were new to us, such as 3D graphics and Apple's SPARK model.
                        </p>
                        <h2 className={styles.sectionHeading}>What I Do</h2>
                        <p>
                            I specialize in full-stack web development, with a focus on React, Next.js, and modern JavaScript/TypeScript.
                        </p>
                        <p>
                            When I'm not coding, I enjoy exploring new technologies, tinkering with side projects, and learning from the developer community. I enjoy tinkering with new tools and building things, whether it's hardware or software projects.
                            I also enjoy going on cycling trips and long nature walks, either by myself or with family and friends.
                        </p>

                        <h2 className={styles.sectionHeading}>Get in Touch</h2>
                        <p>
                            If what I do interests you or you're just curious to learn more about what I do, feel free to reach out!
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className={styles.rightColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/profile.jpg"
                            alt="Wei Dong"
                            width={400}
                            height={400}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}
