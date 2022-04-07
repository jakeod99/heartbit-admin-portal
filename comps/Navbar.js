import Link from 'next/link';
import Image from 'next/image';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { 
    error,
    user,
    loginWithRedirect,
    logout
  } = useAuth0();

  let authLink;
  if (user || error) { // Some user is logged in or an error has occured
    authLink = (
      <a className="login-link" onClick={() => {
        logout({ returnTo: process.env.NEXT_PUBLIC_AUTH0_REDIRECT })
      }}>
        Logout
      </a>
    )
  } else {
    authLink = (
      <a className="login-link" onClick={loginWithRedirect}>
        Login
      </a>
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
        <Link href="/data"><a className="page-link">Data</a></Link>
        <Link href="/help"><a className="page-link">Help</a></Link>
      </div>

      {authLink}
    </nav>
  );
}
 
export default Navbar;