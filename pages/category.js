import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Category.module.css'
import Image from 'next/image'
import img from '../designs/ujwal.jpg'
import { TagsInput } from "react-tag-input-component";
import Link from 'next/link'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { BASE_URL } from '../services/helper'


const category = () => {
    const [selected, setSelected] = useState(["JavaScript"]);
    const [category,setCategory] = useState("")
    const [allCategories,setAllCategories] = useState([])
    const [deleteCategory,setDeleteCategory] = useState("")

    useEffect(()=>{
        const getAllCategories = async () => {
            const res = await fetch(`${BASE_URL}/api/categories`)
            const data = await res.json()
            setAllCategories(data)
            if(data.length)
            setDeleteCategory(data[0].title)
          }
        getAllCategories()
    },[])

    const handleSubmit = () => {
        fetch(`${BASE_URL}/api/categories/addCategory`, {
            method: 'POST',
            body: JSON.stringify({
            title : category
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.error)
                alert("Please enter an unique category (maxSize: 20)")
                else
                alert("Successfully added")
                window.location.reload(false);
                // console.log(data)
            })
            .catch(err=>{
                console.log(err)
                alert("Please enter an unique category (maxSize: 20)")
            })
    }

    const handleDelete = ()=> {
        fetch(`${BASE_URL}/api/categories/${deleteCategory}`,
        {
            method: 'DELETE'
        })
        .then(res=>{
            alert('Successfully Deleted')
            window.location.reload(false);
        })
        .catch(err=>console.log(err))
    }




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
                        <input 
                        type="text" 
                        placeholder='Enter the name of category'
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        />
                        <button 
                        className={styles.btn}
                        onClick={handleSubmit}
                        > 
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
                    <select value={deleteCategory} onChange={(e)=>setDeleteCategory(e.target.value)}>
                        {
                            allCategories.map((category,index)=>{
                                const str = category.title
                                return (
                                    <option value={str} key={index}>
                                        {str.charAt(0).toUpperCase() + str.slice(1)}
                                    </option>
                                )
                            })
                        }
                    </select>
                        <button 
                        className={styles.btn}
                        onClick={handleDelete}
                        >
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