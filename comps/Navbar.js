import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link href='/'>
        <div className="logo">
          <Image src='/RITHA-logo.png' width={54} height={54} alt='logo' />
        </div>
      </Link>
      <Link href="/"><a className="page-link">Home</a></Link>
      <Link href="/admin"><a className="page-link">Admin</a></Link>
      <Link href="/groups"><a className="page-link">Groups</a></Link>
      <Link href="/exercises"><a className="page-link">Exercises</a></Link>
      <Link href="/participants"><a className="page-link">Participants</a></Link>
      <Link href="/info"><a className="page-link">System Info</a></Link>
      <Link href="/login"><a className="login-link">Login</a></Link>
    </nav>
  );
}
 
export default Navbar;