import Link from "next/link"

export default function NavItem({ href, text, active }) {
    return (
        <Link href={href}>
            <a>
                {text}
            </a>
        </Link>
    )
}
