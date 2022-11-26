import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Dashboard.module.css'
import Image from 'next/image'
import img from '../designs/ujwal.jpg'


const dashboard = () => {
    return (
        <Layout>
            <div className={styles.dashboard_container}>
                <div className={styles.side_container}>
                    <div className={styles.image_container}>
                        <div className={styles.img}>
                            <Image src={img} width={70} height={70} className={styles.image} />
                        </div>
                        <div className={styles.text_container}>
                            <p className={styles.text}>Hi Ujwal :) </p>
                        </div>
                    </div>
                    <div className={styles.add_items}>
                        <p>Hi add items</p>
                    </div>
                </div>
                <div className={styles.main_container}>

                </div>

            </div>
        </Layout>
    )
}

export default dashboard