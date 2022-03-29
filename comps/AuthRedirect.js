import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useEffect } from "react";

const AuthRedirect = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    if (router.asPath !== "/" && !isAuthenticated) {
      router.push("/");
    }
  });

  return ( 
    <>
      { children }
    </>
  );
}
 
export default AuthRedirect;