import React from 'react'
import styles from '../styles/CategoryItem.module.css'
const CategoryItem = ({ data, setSearch }) => {
    const str = data;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <div 
        className={styles.container}
        onClick={()=>setSearch(data)}
        >
            {str2}
        </div>
    )
}

export default CategoryItem