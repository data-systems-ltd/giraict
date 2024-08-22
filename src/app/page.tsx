import Landing from "@/components/Landing";
import Product from "@/components/Product";
import Sliders from "@/components/Sliders";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[E5DFDF]-800">
   <header>
  <Landing />
   </header>
  <main>
    <Sliders/>
    <Category/>
    <Brand />
    <Footer />
    <Product/>
  </main>
    </div>


  );
}