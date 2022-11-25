import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Form.module.css'
const login = () => {
    return (
        <Layout>
            <div className={styles.form_container}>
                <form action="">
                    <div className={styles.form}>
                        <p className={styles.heading}>Login</p>
                        <div className={styles.form_element}>
                            <label><b>Email</b></label> <br />
                            <input className={styles.input} type="text" placeholder="Enter Username" />
                        </div>
                        <div className={styles.form_element}>
                            <label><b>Password</b></label> <br />
                            <input className={styles.input} type="text" placeholder="Enter Password" />
                        </div>
                        <div>
                            <button className={styles.btn}>
                                LOGIN
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default login