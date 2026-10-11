import Image from 'next/image';
import styles from './Photos.module.css';

const photos = [
    { src: '/assets/soin-cycling-wcp.jpg', alt: 'Cycling at West Coast Park' },
    { src: '/assets/soin-mount-faber.jpg', alt: 'Mount Faber Hike' },
    { src: '/assets/yac-group-pic.jpg', alt: 'Post YAC pitch' },
    { src: '/assets/hnr26-group.png', alt: 'Hack n Roll 26 group' },
];

export default function Photos() {
    return (
        <div className={styles.gallery}>
            <div className={styles.scrollWrapper}>
                {photos.map((photo, idx) => (
                    <div key={idx} className={styles.imageWrapper}>
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(min-width: 640px) 25vw, 50vw"
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
