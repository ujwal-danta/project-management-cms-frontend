import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Navbar />
        <p>Home Page</p>
      </div>
    </Layout>

  )
}
