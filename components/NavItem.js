import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { UserData } from '../context/context'
import styles from '../styles/Navbar.module.css'
export default function NavItem({ active, text, href }) {
    const { loggedIn, setLoggedIn } = useContext(UserData)
    const router = useRouter()
    const handleLogout = () => {
        setLoggedIn(false)
        router.push('/login')
    }
    if (text === "Login") {
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
    else {
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


}
