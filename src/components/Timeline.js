import styles from './Timeline.module.css';

export default function Timeline({ items }) {
    return (
        <div className={styles.timeline}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <span className={styles.date}>{item.date}</span>
                    <h3 className={styles.role}>{item.role}</h3>
                    <h4 className={styles.company}>{item.company}</h4>
                    <p className={styles.description}>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
