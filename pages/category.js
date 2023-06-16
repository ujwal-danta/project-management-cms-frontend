import React, { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Category.module.css'
import Image from 'next/image'
import img from '../designs/ujwal.jpg'
import { TagsInput } from "react-tag-input-component";
import Link from 'next/link'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'


const category = () => {
    const [selected, setSelected] = useState(["JavaScript"]);
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
                   <div className={styles.category_container}>
                   <div className={styles.category}>
                    <label>
                        Add Category
                    </label> 
                    <div className={styles.add_container}>
                        <input type="text" placeholder='Enter the name of category'/>
                        <button className={styles.btn}> 
                            Add Category
                        </button>
                    </div>
                   </div>
                   <div className={styles.category}>
                    <label>
                        Delete Category
                    </label> 
                    <div className={styles.add_container}>
                    {/* <input type="text" placeholder='Enter the name of category'/> */}
                    <select name="" id="">
                        <option value="">JavaScript</option>
                        <option value="">Java</option>
                    </select>
                        <button className={styles.btn}>
                            Delete Category
                        </button>
                    </div>
                   </div>
                   </div>
                </div>

            </div>
        </Layout>
    )
}

export default category