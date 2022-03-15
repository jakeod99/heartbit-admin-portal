import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import client from "../external/client.js"

const Layout = ({ children }) => {
  return ( 
    <ApolloProvider client={client}>
      <Head>
        <title>HB Admin</title>
      </Head>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <Footer />
    </ApolloProvider>
  );
}
 
export default Layout;