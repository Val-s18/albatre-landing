import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NosServices from "@/components/NosServices";

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
    <div>
       <NosServices/>
    </div>
      </div>
  
  
    </div>
  </main>
</div>
  );
}
