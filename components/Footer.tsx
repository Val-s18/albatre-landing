import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

function Footer() {
  return ( <>
 
       <footer className="flex flex-col bg-white sm:flex-row justify-between pb-16 pt-16 pl-5 pr-10"> 
  <div className="flex flex-col items-center gap-10 mb-5 md:mb-0 md:flex-row">
  <Link href="/">
      <Image src="/albatrelogo.png" alt="Logo" width={190} height={190} className="mr-6" />
  </Link>
  
  <nav className="flex flex-col md:flex-row gap-10">
    <div className="flex flex-col">
    <p className="text-lg font-semibold text-primary">Site web</p>
      <Link href="/equipe" className="text-primary hover:text-gray-600">Qui sommes nous ?</Link>
      <Link href="/about" className="text-primary hover:text-gray-600">Contact</Link>
      <Link href="/about" className="text-primary hover:text-gray-600">Presentation</Link>
      <Link href="/about" className="text-primary hover:text-gray-600">Nos valeurs</Link> 
    </div>
    <div className="flex flex-col">
      <p className="text-lg font-semibold text-primary">Site web</p>
      <Link href="/equipe" className="text-primary hover:text-gray-600">Qui sommes nous ?</Link>
      <Link href="/about" className="text-primary hover:text-gray-600">Contact</Link>
      <Link href="/about" className="text-primary hover:text-gray-600">Presentation</Link>
      <Link href="/about" className="text-primary hover:text-gray-600">Nos valeurs</Link> 
    </div>
  </nav>
  </div>

  <div className="flex flex-col items-center gap-5">  
  <p className="text-lg font-semibold text-primary">Reseaux sociaux</p>
  <div className="flex gap-5 justify-end">  
       <Link href="/">
      <FaInstagram className="text-primary" size={30} />
    </Link> 
    <Link href="/">
      <FaFacebook className="text-primary" size={30} />
    </Link> 
  </div>
 
  </div>
  </footer>

  </> );
}

export default Footer;