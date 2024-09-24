"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

function Presentation() {


  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('section-id'); // Remplacez par l'ID de votre section
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ( <>
  <motion.div
  initial={{ opacity: 0, y: 20 }} // État initial
  animate={isVisible ? { opacity: 1, y: 0 } : {}} // État final si visible
  transition={{ duration: 0.7 }}   
  id="section-id"
  className="flex flex-col md:flex-row items-center justify-center gap-10 text-white  p-4 md:p-8"
  > 
  <div className="flex justify-center order-2 md:order-2">
      <Image src="/paysage.png" width={550} height={200} alt="paysage" className="rounded-md" />
    </div>
    <div className="text-center md:text-left order-1 md:order-2"> 
      <h2 className="text-3xl mb-5 font-semibold">Rejoignez-nous Aujourd&#39;hui</h2>
      <p className="w-full max-w-[500px] mx-auto">
        Chez Albâtre Finance et Conseils, nous sommes prêts à vous accompagner dans la gestion de vos finances et à contribuer à la réussite de votre entreprise. Contactez-nous dès aujourd&#39;hui pour discuter de vos besoins comptables et découvrir comment nous pouvons vous aider à prospérer. Alors n’hésitez plus, le premier rendez-vous avec l’expert-comptable est gratuit.
      </p>
    </div>
  </motion.div>
 
  
  </> );
}

export default Presentation;