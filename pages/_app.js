import Layout from '../comps/Layout';
import '../styles/globals.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Auth0Provider} from '@auth0/auth0-react';
import { ApolloProvider } from "@apollo/client";
import client from "../external/client.js"
import AuthRedirect from '../comps/AuthRedirect';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT}
    >
      <SSRProvider>
        <ApolloProvider client={client}>
          <AuthRedirect>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthRedirect>
        </ApolloProvider>
      </SSRProvider>
    </Auth0Provider>
  );
}

export default MyApp
