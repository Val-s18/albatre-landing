import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NosServices from "@/components/NosServices";
import Presentation from "@/components/Presentation";
import ChoisirAlbatre from "@/components/ChoisirAlbatre";


export default function Home() {
  return (
<div className="">
  <main className="top-0">
    <div className="relative ">
    <div className="pb-0 mb-0 ">
      <div className="">
      <Header />
      </div>
     <div className="mb-32 mt-24">
     <Hero />
      </div>  
       <div className="pb-20 pt-20 bg-gradient-to-r from-primary to-secondary" >
    
      <Presentation/>
    </div>  
    <div className="pb-32 ">
       <NosServices/>
    </div>
  <div>
  <ChoisirAlbatre/>
  </div>
      </div>
  
  
    </div>
  </main>
</div>
  );
}
