
import Bloglist from "@/components/Bloglist";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <ToastContainer theme="dark"/>
    <Header/>
    
    <Bloglist/>
    <Footer/>
    
    </div>
  );
}
