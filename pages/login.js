import React, { useContext, useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Form.module.css'
import { useRouter } from 'next/router'
const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === process.env.EMAIL && password ===process.env.PASSWORD) {
            localStorage.setItem('email', true)
            localStorage.setItem('password', true)
            router.push('/projects/add_project')
        }
        else {
            alert("Enter the correct email and password")
        }
    }

    return (
        <Layout>
            <div className={styles.form_container}>
                <form action="">
                    <div className={styles.form}>
                        <p className={styles.heading}>Admin Login</p>
                        <div className={styles.form_element}>
                            <label><b>Email</b></label> <br />
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.form_element}>
                            <label><b>Password</b></label> <br />
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className={styles.btn} onClick={handleSubmit}>
                                LOGIN
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Login