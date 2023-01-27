import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import CategoryItem from '../components/CategoryItem'
import Card from '../components/Card'


export default function Home() {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  )
}
