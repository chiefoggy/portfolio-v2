import React from 'react';
import styles from './Container.module.css';

export function ContainerOuter({ children, className = '' }) {
    return (
        <div className={`${styles.outer} ${className}`}>
            <div className={styles.inner}>{children}</div>
        </div>
    );
}

export function ContainerInner({ children, className = '' }) {
    return (
        <div className={`${styles.inner} ${className}`}>
            {children}
        </div>
    );
}

export function Container({ children, className = '' }) {
    return (
        <ContainerOuter className={className}>
            {children}
        </ContainerOuter>
    );
}
