import Head from 'next/head'
import React from 'react'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                {children}
            </div>
        </div>

    )
}
