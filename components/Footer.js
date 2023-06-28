import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.icon_container}>
                    <div className={styles.icon}>
                        <a href="https://github.com/ujwal-danta" className={styles.link} target='_blank'>
                        <AiFillGithub />
                        </a>
                    </div>
                    <div className={styles.icon}>
                        <a href="https://www.linkedin.com/in/ujwal-danta-038509203/" className={styles.link} target='_blank'>
                        <AiFillLinkedin />
                        </a>
                    </div>
                    <div className={styles.icon} onClick={()=>alert("Account does not exists")}>
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