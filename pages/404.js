import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/404.module.css'

const NotFound = () => {
  return (
    <div className={styles.page}>
      <div className={styles.image}>
        <Image src='/flatlining.png' width={700} height={200} alt="not found" />
      </div>
      <div className={styles.text}>
        Oops! Page not found. 
        <br /> 
        Try going <Link href="/">Home</Link>.
      </div>
    </div>
   );
}
 
export default NotFound
