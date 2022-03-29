import Layout from '../comps/Layout';
import '../styles/globals.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { ApolloProvider } from "@apollo/client";
import client from "../external/client.js"
import { useRouter } from 'next/router';
import Login from './login';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth0();
  const page = (isAuthenticated) ? <Component {...pageProps} /> : <Login {...pageProps} />;

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT}
    >
      <SSRProvider>
        <ApolloProvider client={client}>
          <Layout>
            {page}
          </Layout>
        </ApolloProvider>
      </SSRProvider>
    </Auth0Provider>
  );
}

export default MyApp
