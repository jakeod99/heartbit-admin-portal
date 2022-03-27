import Link from 'next/link';
import Image from 'next/image';
import { useAuth0, User } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { 
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  let authLink;
  if (isAuthenticated) {
    authLink = (
      // <Link href="/data">
        <a className="login-link" onClick={() => {
          logout({ returnTo: router.asPath })
        }}>
          Logout
        </a>
      // </Link>
    )
  } else {
    authLink = (
      // <Link href="/data">
        <a className="login-link" onClick={loginWithRedirect}>
          Login
        </a>
      // </Link>
    )
  }

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

      {authLink}
    </nav>
  );
}
 
export default Navbar;