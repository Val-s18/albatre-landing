
import Image from 'next/image';
import { motion } from 'framer-motion';


interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
  additionalInfo: string[]; // Informations supplémentaires à afficher au survol de la carte
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text, additionalInfo }) => {
  return (
    <motion.div 
    initial={{ rotateY: 0 }}
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.8 }}
    style={{ perspective: 1000 }}
    className="relative   group w-80">
      <div className="relative w-80 h-72 bg-gray-50 rounded-lg shadow-xl overflow-hidden transition-all duration-300">
        {/* Image et texte de la carte */}
        <motion.div 
        style={{ position: 'absolute' }}
        className="absolute inset-0 transition-opacity flex items-center flex-col duration-500 group-hover:opacity-0 "
        >
           <div className="px-6 py-4">
            <div className="font-bold text-lg text-center  text-black">{title}</div>
          </div>
          <Image src={imageSrc} alt={title} width={170} height={40} className="w-200 h-100 object-cover text-center rounded-t-lg " />
        
            <div className="font-bold text-sm text-center  text-black ">à partir de ..€</div>
          
     </motion.div>

        <motion.div 
        style={{ position: 'absolute', rotateY: 180 }}
        className="absolute p-10  inset-0 flex items-center justify-center bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
        <ul className="text-white  text-sm font-semibold p-1">
            {additionalInfo.map((info: string , index: number) => ( // Pas de changement ici
              <li className=' list-disc list-outside' key={index}>{info}</li>
            ))}
      </ul>
        </motion.div>
      </div>
    </motion.div>
 
  );
};

export default Card;

