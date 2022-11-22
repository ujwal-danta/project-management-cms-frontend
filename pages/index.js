import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.category_container}>
          <div className={styles.filter}>
            <p>Filter by Course</p>
          </div>
          <div className={styles.categories}>

          </div>
        </div>
        <div className={styles.card_container}>

        </div>
      </div>
    </Layout>

  )
}
