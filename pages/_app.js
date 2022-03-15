import Layout from '../comps/Layout';
import '../styles/globals.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp
