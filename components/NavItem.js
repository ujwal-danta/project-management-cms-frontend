import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function NavItem({ href, text, active }) {
    return (
        <Link href={href}>
            <a className={styles.anchor}>
                {text}
            </a>
        </Link>
    )
}
