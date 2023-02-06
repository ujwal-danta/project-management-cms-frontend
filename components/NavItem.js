import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { UserData } from '../context/context'
import styles from '../styles/Navbar.module.css'
export default function NavItem({ active, text, href }) {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.clear()
        router.push('/')
    }
    if (text === "Logout") {
        return (
            <>
                <Link href={href}>
                    <a className={`${styles.navLinks}`} onClick={handleLogout}>
                        <span className={styles.underline}>{text}</span>
                    </a>
                </Link>
            </>
        )
    }
    else {
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


}
