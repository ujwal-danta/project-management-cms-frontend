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


const update_project = () => {
    const router = useRouter()
    const { id } = router.query
    // const [demo, setDemo] = useState(0)
    const [userData, setUserData] = useState({
        title: "",
        tags: [],
        image: "",
        githubLink: "",
        siteLink: ""
    })
    const [selected, setSelected] = useState([]);
    useEffect(() => {

        const getProject = async () => {
            const res = await fetch(`http://localhost:4001/api/projects/${id}`)
            const data = await res.json()
            const temp = data.tags[0].split(",")
            for (let i = 0; i < temp.length; i++) {
                var str = temp[i]
                var newStr = str.replace(/[\[\]']+/g, '')
                temp[i] = newStr.replace(/['"]+/g, '')
            }
            setSelected(temp)
            setUserData({
                title: data.title,
                tags: selected,
                image: data.image,
                githubLink: data.githubLink,
                siteLink: data.siteLink
            })
        }
        if (id)
            getProject()
    }, [id])


    const handleSubmit = (e) => {
        console.log('submitted')
        e.preventDefault()
       let str = ""; 
       for (let i=0;i<selected.length;i++){
       str+=selected[i];
       if(i<selected.length-1)
       str+=','
       }
        // console.log("Entering else if")
        if (userData.title && selected.length && userData.image && userData.githubLink && userData.siteLink) {
            // console.log("Inside if")
            // console.log(userData.title)
            // console.log(userData.image)
            // console.log(userData.githubLink)
            // console.log(userData.siteLink)
            const formData = new FormData()
            formData.append('title', userData.title)
            formData.append('tags', [str])
            formData.append('image', userData.image)
            formData.append('githubLink', userData.githubLink)
            formData.append('siteLink', userData.siteLink)
            setTimeout(() => {
                alert("Please wait !!! Updating data......")
            }, 500)
            fetch(`http://localhost:4001/api/projects/${id}`, {
                method: 'PATCH',
                // headers:  {"Content-Type": "multipart/form-data"},
                body: formData
            })
                .then(response => {
                    // console.log("inside res.json()")
                    return response.json()
                })
                .then(data => {
                    // console.log("inside data")
                    // alert("Succesfully Updated")
                    router.push('/')
                })
                .catch(err=>{
                    alert('An error occurred!!! Please retry...')
                    console.log(err)
                })
        }
        else {
            console.log("Inside Else")
            console.log(selected)
            alert("Please enter all the fields")
        }

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
                                </ul>
                            </li>

                            <li className={styles.categories}>
                                <Link href={'#'}>
                                    <a> <BiCategory /> Categories</a>
                                </Link>
                                <ul className={styles.sub_menu}>
                                    <li>
                                        <Link href={'/category'}>
                                            <a>Add/Delete Category</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>


                    </div>
                    <div className={styles.main_container}>
                        <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
                            <h1>Update Item</h1>
                            <hr />
                            <div className={styles.form_element}>
                                <label>Add Title</label> <br />
                                <input type="text"
                                    className={styles.input}
                                    value={userData.title}
                                    onChange={(e) => setUserData({ ...userData, title: e.target.value })} />
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
                                <label>Current Image</label> <br />
                                <input
                                    type="text"
                                    className={`${styles.input} ${styles.input_img} `}
                                    value={userData.image}
                                    readOnly
                                />
                            </div>

                            <div className={styles.form_element}>
                                <label>Change Image</label> <br />
                                <input
                                    type="file"
                                    className={styles.input}
                                    // value={userData.image ? '' : userData.image}
                                    onChange={(e) => setUserData({ ...userData, image: e.target.files[0] })}
                                />
                            </div>

                            <div className={styles.form_element}>
                                <label>Add Github Link</label> <br />
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={userData.githubLink}
                                    onChange={(e) => setUserData({ ...userData, githubLink: e.target.value })}
                                />
                            </div>

                            <div className={styles.form_element}>
                                <label>Add Site Link</label> <br />
                                <input
                                    type="text"
                                    value={userData.siteLink}
                                    className={styles.input}
                                    onChange={(e) => setUserData({ ...userData, siteLink: e.target.value })}
                                />
                            </div>

                            <div>
                                <button className={styles.btn} onClick={handleSubmit}>
                                    SUBMIT
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </Layout>
        </>
        // <>
        //     <p>Ok</p>
        // </>
    )
}

export default update_project