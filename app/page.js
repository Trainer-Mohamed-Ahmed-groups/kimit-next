import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={`${styles.first_division} ${styles.test}`}>
      <Image 
        src="/react-logo.png"
        alt="React Logo"
        width={200}
        height={100}
      />
      <div className={styles.test}>test</div>
    </div>
  )
}
