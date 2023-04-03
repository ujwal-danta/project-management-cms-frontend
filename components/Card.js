import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
// import image from '../designs/Screenshot (99).png'
import Tag from './Tag'
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

const Card = ({ project }) => {
    const { title, tags, image, githubLink, siteLink, _id } = project
    const admin = localStorage.getItem('email')
    const router = useRouter()
    console.log(title)
    console.log("tags - ", tags)
    const temp = tags[0].split(",")
    for (let i = 0; i < temp.length; i++) {
        var str = temp[i]
        var newStr = str.replace(/[\[\]']+/g, '')
        temp[i] = newStr.replace(/['"]+/g, '')
    }

    const generateId = () => {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)
        return small_id
    }

    const handleSubmit = () => {
        router.push(`/projects/${_id}`)
    }



    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image
                    src={image}
                    alt='Not Found'
                    layout='fill'
                    className={styles.image}
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
            <div className={styles.admin_btn}>
                {admin &&
                    <button className={`${styles.admin_btns} ${styles.update}`} onClick={handleSubmit}>
                        Update
                    </button>}
                {admin &&
                    <button className={`${styles.admin_btns} ${styles.delete}`} onClick={handleSubmit}>
                        Delete
                    </button>}
            </div>
        </div>
    )
}

export default Card