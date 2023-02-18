import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Dashboard.module.css'
import Image from 'next/image'
import img from '../../designs/ujwal.jpg'
import { TagsInput } from "react-tag-input-component";
import Link from 'next/link'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'


const add_project = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [selected, setSelected] = useState(["JavaScript"]);
    const [userData, setUserData] = useState({
        title: " ",
        tags: [],
        image: " ",
        githubLink: " ",
        siteLink: " "
    })

    useEffect(() => {
        if (localStorage.getItem('email')) {
            setLoggedIn(true)
        }
        console.log(userData)
    }, [userData])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(selected)
        setUserData({ ...userData, tags: selected })
        console.log('form submitted')
    }




    return (
        <>
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

                        {/* side nav */}

                        <ul className={styles.main_menu}>
                            <li className={styles.projects}>
                                <Link href={'#'}>
                                    <a><AiOutlineFundProjectionScreen /> Projects</a>
                                </Link>
                                <ul className={styles.sub_menu}>
                                    <li>
                                        <Link href={'/projects/add_project'}>
                                            <a>Add a project</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/projects/update_project'}>
                                            <a>Update a project</a>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href={'/projects/delete_project'}>
                                            <a>Delete a project</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className={styles.categories}>
                                <Link href={'#'}>
                                    <a> <BiCategory /> Categories</a>
                                </Link>
                                <ul className={styles.sub_menu}>
                                    <li>
                                        <Link href={'/categories/add_category'}>
                                            <a>Add a project</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/categories/delete_category'}>
                                            <a>Delete a project</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>


                    </div>
                    <div className={styles.main_container}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <h1>Add an Item</h1>
                            <hr />
                            <div className={styles.form_element}>
                                <label>Add Title</label> <br />
                                <input type="text" className={styles.input} onChange={(e) => setUserData({ ...userData, title: e.target.value })} />
                            </div>

                            <div className={styles.form_element}>
                                <label>Add Tags</label> <br />
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="fruits"
                                    placeHolder="Enter Tags"
                                />
                            </div>

                            <div className={styles.form_element}>
                                <label>Add Image</label> <br />
                                <input
                                    type="file"
                                    className={styles.input}
                                    onChange={(e) => setUserData({ ...userData, image: e.target.value })}
                                />
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
        </>

    )
}

export default add_project