import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return ( 
    <>
      <Head>
        <title>HB Admin</title>
      </Head>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <Footer />
    </>
  );
}
 
export default Layout;