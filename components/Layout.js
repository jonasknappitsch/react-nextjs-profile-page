import Head from "next/head";
import Navbar from "./FullScreenNav";
import Footer from "./Footer";

const Layout = (props) => (
  <div>
    <Head>
      <title>Jonas Knappitsch</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>
    
    <Navbar />
    {props.children}
    <Footer/>
    
  </div>
);

export default Layout;
