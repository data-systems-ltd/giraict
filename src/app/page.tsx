import Landing from "@/components/Landing";
import Sliders from "@/components/Sliders";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Image from "next/image";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";


export default function Home() {
  return (
    <div className="bg-[E5DFDF]-800">
   <header>
  <Landing />
   </header>
   
  <main>
    {/* <Login /> */}
    <Sliders/>
    <Category/>
    <Brand />
    <Footer />
  </main>
  
    </div>


  );
}