import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'
export default function NavItem({ active, text, href }) {
    return (
        <>
            <Link href={href}>
                <a className={`${styles.navLinks}`}>
                    <span className={styles.underline}>{text}</span>
                </a>
            </Link>
        </>
    )
}
