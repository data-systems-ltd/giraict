import Landing from "@/components/Landing";
import Sliders from "@/components/Sliders";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Deal from '@/components/Deal'
import Contact from "@/components/Contact"


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
    <Deal/>
    <Contact/>
    <Footer />
  </main>
  
    </div>


  );
}