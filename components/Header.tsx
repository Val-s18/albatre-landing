"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa6';
import Bouton from './bouton/bouton';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center">
      <Image src="/albatrelogo.png" alt="Logo" width={170} height={170} className="w-auto mr-4" />
        
        <nav className="hidden md:flex space-x-4 font-semibold">
          <Link href="/" className="text-primary hover:text-gray-600">Qui sommes nous ?</Link>
          <Link href="/about" className="text-primary hover:text-gray-600">Contact</Link>
        </nav>
      </div>

      <Bouton className="hidden md:block px-4 py-2 rounded" 
      texte="Contact" 
      variante="primaire" 
      taille="grand" 
      />
      <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      </div>

      {isOpen && (
        <div className="absolute top-24 right-0 left-0  bg-white shadow-md md:hidden">
          <nav className="flex flex-col p-4 text-black">
            <Link href="/" className="py-2">Accueil</Link>
            <Link href="/about" className="py-2">À propos</Link>

            <Bouton texte='Contactez Nous ?' variante='outline' taille='moyen'  />
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
export default Header;
