import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link href='/'>
        <div className="logo">
          <Image src='/logo.png' width={54} height={54} alt='logo' />
        </div>
      </Link>
      <div className="page-link-container">
        <Link href="/exercises"><a className="page-link">Data</a></Link>
        <Link href="/help"><a className="page-link">Help</a></Link>
      </div>      
      <Link href="/login"><a className="login-link">Login</a></Link>
    </nav>
  );
}
 
export default Navbar;