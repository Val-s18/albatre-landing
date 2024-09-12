

import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
  additionalInfo: string[]; // Informations supplémentaires à afficher au survol de la carte
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text, additionalInfo }) => {
  return (
    <div className="relative  p-4 group w-80  ">
      <div className="relative w-80 h-64 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300">
        {/* Image et texte de la carte */}
        <div className="absolute inset-0 transition-opacity flex items-center flex-col duration-500 group-hover:opacity-0 ">
          <Image src={imageSrc} alt={title} width={170} height={40} className="w-200 h-100 object-cover text-center rounded-t-lg " />
          <div className="px-6 py-4">
            <div className="font-bold text-lg text-center pb-4 text-black">{title}</div>
            {/* <p className="text-base text-black">{text}</p> */}
          </div>
        </div>
        {/* Texte d'explication au survol */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ul className="text-black text-base font-semibold p-1">
            {additionalInfo.map((info: string , index: number) => ( // Pas de changement ici
              <li key={index}>{info}</li>
            ))}
      </ul>
        </div>
      </div>
    </div>
 
  );
};

export default Card;

