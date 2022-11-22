import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.icon_container}>
                    <div className={styles.icon}>
                        <AiFillGithub />
                    </div>
                    <div className={styles.icon}>
                        <AiFillLinkedin />
                    </div>
                    <div className={styles.icon}>
                        <AiFillInstagram />
                    </div>
                </div>
                <div>
                    <p className={styles.text}>@ 2022 Ujwal Danta. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer