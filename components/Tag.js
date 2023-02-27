import React from 'react'
import styles from '../styles/Card.module.css'

const Tag = ({ tag }) => {
    return (
        <div className={styles.tags}>
            <p>{tag}</p>
        </div>
    )
}

export default Tag