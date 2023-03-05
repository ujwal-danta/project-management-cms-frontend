import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Dashboard.module.css'
import Image from 'next/image'
import img from '../../designs/ujwal.jpg'
import { TagsInput } from "react-tag-input-component";
import Link from 'next/link'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { useRouter } from 'next/router'


const add_project = () => {
    const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(false)
    const [selected, setSelected] = useState(["JavaScript"]);
    const [userData, setUserData] = useState({
        title: "",
        tags: [],
        image: "",
        githubLink: "",
        siteLink: ""
    })

    useEffect(() => {
        if (localStorage.getItem('email')) {
            setLoggedIn(true)
        }
        // console.log('useEffect called')
        // console.log(selected)
        setUserData({ ...userData, tags: selected })
    }, [selected])

    const handleSubmit = (e) => {
        e.preventDefault()
        // setUserData({ ...userData, tags: selected })
        if (userData.title && userData.tags && userData.image && userData.githubLink && userData.siteLink) {
            const formData = new FormData()
            formData.append('title', userData.title)
            formData.append('tags', userData.tags)
            formData.append('image', userData.image)
            formData.append('githubLink', userData.githubLink)
            formData.append('siteLink', userData.siteLink)
            setTimeout(() => {
                alert("Please wait !!! Posting data......")
            }, 1000)
            fetch("http://localhost:4001/api/projects", {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    return response.json()
                })
                .then(result => {
                    if (result.error) {
                        alert("Title taken. Please try again with a different one")
                    }
                    else {
                        router.push('/')
                    }
                })
                .catch(err => console.log(err))
        }
        else {
            alert("Please enter all the fields")
        }

    }




    return (
        !loggedIn ?
            <>
                <div className={styles.empty}>
                    <h1> Please &nbsp;
                        <Link href={'/login'}>
                            Log In
                        </Link>
                        &nbsp;
                        to access Dashboard</h1>
                    <br />
                    <p>
                        Go back &nbsp;
                        <Link href={'/'}>
                            Home
                        </Link>
                    </p>
                </div>
            </>
            :
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
                            <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
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
                                        onChange={(e) => setUserData({ ...userData, image: e.target.files[0] })}
                                    />
                                </div>

                                <div className={styles.form_element}>
                                    <label>Add Github Link</label> <br />
                                    <input
                                        type="text"
                                        className={styles.input}
                                        onChange={(e) => setUserData({ ...userData, githubLink: e.target.value })}
                                    />
                                </div>

                                <div className={styles.form_element}>
                                    <label>Add Site Link</label> <br />
                                    <input
                                        type="text"
                                        className={styles.input}
                                        onChange={(e) => setUserData({ ...userData, siteLink: e.target.value })}
                                    />
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