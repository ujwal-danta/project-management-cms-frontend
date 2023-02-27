import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import image from '../designs/Screenshot (99).png'
import Tag from './Tag'
import Link from 'next/link'

const Card = ({ project }) => {

    const { title, tags, githubLink, siteLink } = project

    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image
                    src={image}
                    alt='Not Found'
                />
            </div>
            <div className={styles.title_container}>
                <p>{title}</p>
            </div>
            <div className={styles.tag_container}>
                {
                    tags.map(tag => (<Tag tag={tag} />))
                }
            </div>
            <div className={styles.links}>
                <a href={githubLink} target='_blank'>Github</a>
                <a href={siteLink} target='_blank'>Site</a>
            </div>
        </div>
    )
}

export default Card