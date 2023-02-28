import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import CategoryItem from '../components/CategoryItem'
import Card from '../components/Card'
import { useEffect, useState } from 'react'


export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {

    const getAllProjects = async () => {
      const res = await fetch('http://localhost:4001/api/projects')
      const data = await res.json()
      setProjects(data)
    }

    getAllProjects()

  }, [])



  const CATEGORY_LIST = [
    {
      text: 'Node js',
    },
    {
      text: 'Javascript',
    },
    {
      text: 'Bootstrap',
    },
    {
      text: 'java',
    }
  ]



  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.category_container}>
          <div className={styles.filter}>
            <p>Filter by Course</p>
          </div>
          <div className={styles.categories}>
            {
              CATEGORY_LIST.map((category, index) => <CategoryItem key={index} data={category.text} />
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
