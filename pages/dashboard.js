import React, { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Dashboard.module.css'
import Image from 'next/image'
import img from '../designs/ujwal.jpg'
import { TagsInput } from "react-tag-input-component";


const dashboard = () => {
    const [selected, setSelected] = useState(["papaya"]);
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
                    <form className={styles.form}>
                        <div className={styles.form_element}>
                            <label>Add Title</label> <br />
                            <input type="text" className={styles.input} />
                        </div>

                        <div className={styles.form_element}>
                            <label>Add Tags</label> <br />
                            <TagsInput
                                value={selected}
                                onChange={setSelected}
                                name="fruits"
                                placeHolder="enter fruits"
                            />
                        </div>

                        <div className={styles.form_element}>
                            <label>Add Image</label> <br />
                            <input type="text" className={styles.input} />
                        </div>

                        <div className={styles.form_element}>
                            <label>Add Github Link</label> <br />
                            <input type="text" className={styles.input} />
                        </div>

                        <div className={styles.form_element}>
                            <label>Add Site Link</label> <br />
                            <input type="text" className={styles.input} />
                        </div>

                        <div>
                            <button className={styles.btn}>
                                SUBMIT
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default dashboard