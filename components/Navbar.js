import Link from 'next/link';
import React from 'react'

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
        <header>
            <nav>
                <Link href={'/'}>
                    <a>
                        <h1>Project CMS</h1>
                    </a>
                </Link>
            </nav>
            <div
                onClick={() => setNavActive(!navActive)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}
