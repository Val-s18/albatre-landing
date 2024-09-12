import { FaBriefcase, FaLaptop, FaUserCheck } from "react-icons/fa6";

function ChoisirAlbatre() {
  return ( <>
  <div className="flex flex-col p-10 text-primary bg-gradient-to-l from-primary to-secondary ">
    <h2 className="text-3xl font-semibold text-white mb-10 text-center">Pourquoi Choisir Albâtre Finance et Conseils?</h2> {/* Centrer le titre sur mobile */}
    <div className="flex flex-wrap justify-center gap-7"> {/* Utilisation de flex-wrap pour le responsive */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-sm rounded-md p-5"> {/* Largeur responsive */}
        <h3 className="text-xl font-semibold">Expérience et Expertise</h3>
        <p>Avec Youssef Boulahdid à la tête de notre équipe, nous offrons une expertise
inégalée en comptabilité et en audit. Nos collaborateurs, formés par Youssef lui-
même, apportent une valeur ajoutée significative grâce à leur connaissance
approfondie et leur engagement envers l&#39;excellence.</p>
<div className="flex justify-end mt-2"> {/* Alignement similaire à Approche Personnalisée */}
          <FaBriefcase className="text-primary mr-2" size={30} /> 
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-sm rounded-md p-5">
        <h3 className="text-xl font-semibold">Approche Personnalisée</h3>
        <p>Chaque client est unique, et nous adaptons nos services pour répondre à vos
besoins spécifiques. Nous prenons le temps de comprendre vos défis et vos objectifs
afin de fournir des solutions sur mesure.</p>
        <div className="flex justify-end mt-14"> {/* Alignement similaire à Expérience et Expertise */}
          <FaUserCheck className="text-primary mr-2" size={30} /> 
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-sm rounded-md p-5">
        <h3 className="text-xl font-semibold mb-5">Technologie Moderne</h3>
        <p>Nous utilisons les outils et les logiciels les plus récents pour garantir l&#39;efficacité et la
précision de nos services. Cela nous permet de vous offrir des solutions comptables
innovantes et adaptées à l&#39;ère numérique.</p>
        <div className="flex justify-end mt-10">
          <FaLaptop className="text-primary mr-2" size={30} /> 
        </div>
      </div>
    </div>
  </div>
  </> );
}

export default ChoisirAlbatre;