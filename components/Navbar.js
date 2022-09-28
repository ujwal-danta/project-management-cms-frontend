import Link from 'next/link';
import React, { useState } from 'react'
import NavItem from './NavItem';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const MENU_LIST = [
        { text: "Home", href: "/" },
        { text: "Dashboard", href: "/dashboard" },
        { text: "Admin Login", href: "/adminLogin" },
        { text: "About", href: "/about" }
    ]

    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={'/'}>
                    <a className={styles.anchor}>
                        <h1>Project CMS</h1>
                    </a>
                </Link>
                <div
                    className={styles.nav_menubar}
                    onClick={() => setNavActive(!navActive)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${styles.nav_menuList} ${navActive ? styles.active : ""}`}>
                    {
                        MENU_LIST.map((menu, idx) => (
                            <div
                                onClick={() => {
                                    setNavActive(false)
                                    setActiveIdx(idx)
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}
