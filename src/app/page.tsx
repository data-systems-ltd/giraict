import Landing from "@/components/Landing";
import Product from "@/components/Product";
import { CategoryLayout } from "@/components/categoryLayout"


export default function Home() {
  return (
    <div className="">
   <header>
  <Landing />
   </header>
   {/* <CategoryLayout children={undefined} /> */}
   <Product/>
</div>
  );
}
