import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import CategoryItem from '../components/CategoryItem'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BASE_URL } from '../services/helper'


export default function Home() {
  const [projects, setProjects] = useState([])
  const [categories,setCategories] = useState([])
  const [search,setSearch] = useState("")

const router = useRouter()

  useEffect(() => {
    const getAllProjects = async () => {
      setProjects([])
      const res = await fetch(`${BASE_URL}/api/projects`)
      const data = await res.json()
      if(search)
      {
        // get the all projects with keyword Search
        const ans = []
        for(const obj of data){
          const str = obj.tags[0].toLowerCase()
          if(str.includes(search.toLowerCase())){
          ans.push(obj)
          }
        }
        if(ans.length===0)
        {
          alert(`No Projects found under ${search}`)
          setSearch("")
        }
        setProjects(ans)
      }
      else{
        setProjects(data)
      }
    }

    const getAllCategories = async () => {
      const res = await fetch(`${BASE_URL}/api/categories`)
      const data = await res.json()
      setCategories(data)
    }

    getAllProjects()
    getAllCategories()
  }, [search])






  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.category_container}>
          <div className={styles.filter}>
            <p>Filter by Course</p>
          </div>
          <div className={styles.categories}>
            <div className={`${styles.allProjects} ${search==""?styles.active:''}`} onClick={()=>setSearch("")}>
            {`All Projects`}
            </div>
            {
              categories.map((category, index) => <CategoryItem 
              key={index} 
              data={category.title} 
              setSearch={setSearch}
              search = {search}
              />
              )
            }
          </div>
        </div>
        <div className={styles.card_container}>
          {
            !projects.length ? <h1>Loading</h1> : projects.map((project) => (<Card project={project} key={project._id} />))
          }
        </div>
      </div>
    </Layout>
  )
}
