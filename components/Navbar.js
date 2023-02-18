import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import NavItem from './NavItem'
import styles from '../styles/Navbar.module.css'


export default function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('email')) {
            setLoggedIn(true)
        }
    }, [])

    const MENU_LIST = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Dashboard',
            href: '/projects/add_project'
        },
        {
            text: loggedIn ? 'Logout' : 'Login',
            href: '/login'
        },
        {
            text: 'About',
            href: '/about'
        }
    ]

    const [activeIdx, setActiveIdx] = useState(-1)
    const [showSideNav, setShowSideNav] = useState(false)

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={`/`}>
                    <a className={`${styles.navLinks} ${styles.logo}`}>Project CMS</a>
                </Link>
                <div
                    className={styles.hamburger}
                    onClick={() => setShowSideNav(!showSideNav)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${styles.navItems} ${showSideNav ? styles.active : ""}`}>
                    {
                        MENU_LIST.map((menu, idx) => (
                            <div key={idx}
                                onClick={() => {
                                    setActiveIdx(idx)

                                }}
                            >
                                <NavItem active={idx === activeIdx} key={idx}  {...menu} />
                            </div>
                        ))

                    }
                </div>
            </nav>
        </header>
    )
}
