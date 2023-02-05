import Head from 'next/head'
import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

export default function Layout({ children }) {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <>
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <>
                    <div>
                        <Navbar />
                    </div>
                    <div className={styles.layout}>
                        {children}
                    </div>
                    <div>
                        <Footer />
                    </div>
                </>
            </div>
        </>
    )
}
