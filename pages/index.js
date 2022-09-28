import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Navbar />
        <h1>Home Page</h1>
      </div>
    </Layout>

  )
}
