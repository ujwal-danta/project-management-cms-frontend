import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import CategoryItem from '../components/CategoryItem'
import Card from '../components/Card'


export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.category_container}>
          <div className={styles.filter}>
            <p>Filter by Course</p>
          </div>
          <div className={styles.categories}>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
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
