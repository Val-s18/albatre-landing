import { useEffect, useRef, useState } from "react"
import { Transition } from '@headlessui/react'
import Image from "next/image"


interface CardEquipeProps {
  tabsData: {
    title: string;
    subtitle: string;
    content: string;
    image: string;
  }[];
}


const CardEquipe: React.FC<CardEquipeProps> = ({ tabsData }) => {


  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <>
    
      {/* <div className="flex gap-44 justify-center w-full">
        <div className="md:rtl ms:w-5/12 lg:w-1/2 order-1 ms:order-none"> */}
  
            {/* <div className="relative flex flex-col" data-aos="fade-down" ref={tabs}>
              {tabsData.map((tabData, index) => (
                <Transition
                  key={index}
                  show={tab === index + 1}
                  as="div"
                  className=""
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="">
                 
                    {/* <h2 className='font-semibold text-xl pb-10'>{tabData.subtitle}</h2>
                    <p>{tabData.content}</p> 
                  </div>
                </Transition>
              ))}
            </div> */}
        
     

   
      {/* </div> */}

      <div className="md:w-10/12 lg:w-3/4 flex flex-col  justify-center mx-auto sm:gap-32 sm:items-center sm:justify-center   " data-aos="fade-up"> {/* Augmentation de la largeur et ajout de 'justify-center' */}
     
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row md:gap-6 lg:gap-6   "> {/* Flex en colonne pour mobile, en ligne pour sm et lg, centré en sm */}
            {tabsData.map((_, index) => (
              <button
                key={index}
                className={`flex flex-col items-center bg-white border-2 px-5 py-3 rounded-lg shadow-lg transition-transform duration-300 ease-in-out w-full sm:w-64 h-40 overflow-hidden  
                  ${tab !== index + 1 ? 'border-transparent opacity-50 hover:opacity-75 hover:shadow-xl' : 'border-2 border-blue-500 opacity-100'}`}
                onClick={(e) => { e.preventDefault(); setTab(index + 1); }}
              >
                <Image className="md:max-w-none mx-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" src={tabsData[index].image} width={100} height={80} alt={`Features home 2 0${index + 1}`} />
                <span className="mt-2 text-lg font-semibold">{tabsData[index].title}</span>
              </button>
            ))}
          </div>
          <div className=" mt-4"> 
          <h2 className='font-semibold text-xl pb-5'>{tabsData[tab - 1].subtitle}</h2> {/* Correction de 'tabData' à 'tabsData' */}
            <p className="mt-2">

              {tab > 0 ? tabsData[tab - 1]?.content : ''} {/* Affiche le contenu de la tab sélectionnée */}
            </p>
          </div>
        {/* </div> */}
       </div>

    </>
  );
}

export default CardEquipe;