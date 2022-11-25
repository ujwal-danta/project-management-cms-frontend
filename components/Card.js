import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import image from '../designs/Screenshot (99).png'
import Tag from './Tag'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image
                    src={image}
                    alt='Not Found'
                    className="image"
                />
            </div>
            <div className={styles.title_container}>
                <p>Card Title</p>
            </div>
            <div className={styles.tag_container}>
                <Tag />
                <Tag />
                <Tag />
            </div>
            <div className={styles.links}>
                <Link href={"#"}>
                    <a>Github</a>
                </Link>
                <Link href={"#"}>
                    <a>Site</a>
                </Link>
            </div>
        </div>
    )
}

export default Card