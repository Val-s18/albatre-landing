"use client"
import Card from "./card/CardNosServices";

const services = [ // Ajoutez cette ligne pour définir les services
  {
    imageSrc: '/imgcard.svg',
    title: 'Comptabilité Générale : à partir de ...€',
    text: 'Description du service 1',
    additionalInfo: ['Infos supplémentaires 1', 'Infos supplémentaires 2', 'Infos supplémentaires 3'], 
  },
  {
    imageSrc: '/imgcard1.svg',
    title: 'Fiscalité',
    text: 'Description du service 1',
    additionalInfo: ['Infos supplémentaires 1', 'Infos supplémentaires 2', 'Infos supplémentaires 3'], 
  },
  {
    imageSrc: '/imgcard2.svg',
    title: 'Accompagnement',
    text: 'Description du service 1',
    additionalInfo: ['Infos supplémentaires 1', 'Infos supplémentaires 2', 'Infos supplémentaires 3'], 
  },
  {
    imageSrc: '/imgcard3.svg',
    title: 'Création d&#39;entreprise',
    text: 'Description du service 1',
    additionalInfo: ['Infos supplémentaires 1', 'Infos supplémentaires 2', 'Infos supplémentaires 3'], 
  },
  {
    imageSrc: '/imgcard4.svg',
    title: 'Juridique',
    text: 'Description du service 1',
    additionalInfo: ['Infos supplémentaires 1', 'Infos supplémentaires 2', 'Infos supplémentaires 3'], 
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
  <div className="bg-primary pb-16 ">
    <p className="text-white text-3xl font-semibold text-center mt-20 p-10 ">Nos Services</p>
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