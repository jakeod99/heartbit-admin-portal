import Link from 'next/link'
import styles from '../styles/404.module.css'

const NotFound = () => {
  return (
    <div className={styles.page}>
      <img src='/flatlining.png' className={styles.image} />
      <div className={styles.text}>
        Oops! Page not found. 
        <br /> 
        Try going <Link href="/">Home</Link>.
      </div>
    </div>
   );
}
 
export default NotFound
