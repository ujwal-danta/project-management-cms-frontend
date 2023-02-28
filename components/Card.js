import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import image from '../designs/Screenshot (99).png'
import Tag from './Tag'
import Link from 'next/link'
import { v4 as uuid } from 'uuid';

const Card = ({ project }) => {
    const { title, tags, githubLink, siteLink } = project

    const temp = tags[0].split(",")

    const generateId = () => {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)
        return small_id
    }



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
                    temp.map(tag => (<Tag tag={tag} key={generateId()} />))
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