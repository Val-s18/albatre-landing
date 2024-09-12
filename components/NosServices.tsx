"use client"
import Card from "./card/CardNosServices";

const services = [ // Ajoutez cette ligne pour définir les services
  {
    imageSrc: '/imgcard.svg',
    title: 'Comptabilité Générale : à partir de ...€',
    text: 'Description du service 1',
    additionalInfo: ['Tenue de comptabilité', 'Préparation des états financiers', 'Déclarations fiscales'], 
  },
  {
    imageSrc: '/imgcard1.svg',
    title: 'Fiscalité',
    text: 'Description du service 1',
    additionalInfo: ['Optimisation de la rémunération du dirigeant avec accompagnement patrimonial'], 
  },
  {
    imageSrc: '/imgcard2.svg',
    title: 'Accompagnement',
    text: 'Description du service 1',
    additionalInfo: ['Tableau de bord', 'Plaquette pour vos projets (ventes, expansion de votre activité)', 'Assistance aux direction comptable', 'Daf externalisé : directeur administratif et financier', 'Nouvelle technologie'], 
  },
  {
    imageSrc: '/imgcard3.svg',
    title: 'Création d&#39;entreprise',
    text: 'Description du service 1',
    additionalInfo: ['Formalité de création', 'Assistance en matière de financement', 'Plan de trésorerie', 'Budget prévisionnel'], 
  },
  {
    imageSrc: '/imgcard4.svg',
    title: 'Juridique',
    text: 'Description du service 1',
    additionalInfo: ['Elaboration de procès-verbaux d’assemblée générale', 'Création et modification de statuts, de forme juridique'], 
  },
  {
    imageSrc: '/imgcard5.svg',
    title: 'Accompagnement dans la transition écologique',
    text: 'Description du service 1',
    additionalInfo: ['Reporting CSRD', 'Bilan carbone', 'Démarche RSE'], 
  },
  // Ajoutez d'autres services ici
];
function NosServices() {
  return ( <>
  <div className="  text-primary ">
    <p className=" text-4xl font-semibold text-center mt-20 p-10 ">Nos Services</p>
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
  </div>

  </> );
}

export default NosServices;