import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const MENU_LIST = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Dashboard',
            href: '/dashboard'
        },
        {
            text: 'Login',
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
                <Link href={``}>
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
                            <div
                                onClick={() => {
                                    setActiveIdx(idx)
                                }}
                            >
                                <NavItem active={idx === activeIdx}   {...menu} />
                            </div>
                        ))

                    }
                </div>
            </nav>
        </header>
    )
}
