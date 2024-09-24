"use client"
import { useEffect, useState } from "react";
import Card from "./card/CardNosServices";
import { motion } from 'framer-motion';
const services = [ // Ajoutez cette ligne pour définir les services
  {
    imageSrc: '/compta.svg',
    title: 'Comptabilité Générale',
    text: 'Description du service 1',
    additionalInfo: ['Tenue de comptabilité', 'Préparation des états financiers', 'Déclarations fiscales'], 
  },
  {
    imageSrc: '/fiscalite.svg',
    title: 'Fiscalité',
    text: 'Description du service 1',
    additionalInfo: ['Optimisation de la rémunération du dirigeant avec accompagnement patrimonial'], 
  },
  {
    imageSrc: '/accompagnement.svg',
    title: 'Accompagnement',
    text: 'Description du service 1',
    additionalInfo: ['Tableau de bord', 'Plaquette pour vos projets (ventes, expansion de votre activité)', 'Assistance aux direction comptable', 'Daf externalisé : directeur administratif et financier', 'Nouvelle technologie'], 
  },
  {
    imageSrc: '/crea.svg',
    title: 'Création d\'entreprise',
    text: 'Description du service 1',
    additionalInfo: ['Formalité de création', 'Assistance en matière de financement', 'Plan de trésorerie', 'Budget prévisionnel'], 
  },
  {
    imageSrc: '/juridique.svg',
    title: 'Juridique',
    text: 'Description du service 1',
    additionalInfo: ['Elaboration de procès-verbaux d’assemblée générale', 'Création et modification de statuts, de forme juridique'], 
  },
  {
    imageSrc: '/ecologie.svg',
    title: 'transition écologique',
    text: 'Description du service 1',
    additionalInfo: ['Reporting CSRD', 'Bilan carbone', 'Démarche RSE'], 
  },

];
function NosServices() {


  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('section-NosService'); // Remplacez par l'ID de votre section
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
       id="section-NosService"
  className="  text-primary ">
    <p className=" text-4xl font-semibold text-center p-5 mb-5 ">Nos Services</p>
    <div className="flex flex-wrap  flex-col justify-center items-center  ">
    <div className="flex flex-wrap justify-center items-center gap-4">
      {services.map((service, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center"> 
          <Card
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            text={service.text}
            additionalInfo={service.additionalInfo}
          />
        </div>
        ))}
      </div>
 
    </div>
  </motion.div>

  </> );
}

export default NosServices;