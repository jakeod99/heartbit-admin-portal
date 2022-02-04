import Head from "next/head";
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = ({ children }) => {
  return ( 
    <div className="page">
      <Head>
        <title>HB Admin</title>
      </Head>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <Footer />
    </div> 
  );
}
 
export default Layout;