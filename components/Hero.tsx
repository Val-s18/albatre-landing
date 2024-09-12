'use client'

import Image from 'next/image'
import { FaReact } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import Bouton from './bouton/bouton'

export default function Hero() {


  return (
<div className="flex flex-col md:flex-row justify-center mt-36">
  <div className='flex flex-col justify-center text-primary w-full md:w-[550px] mt-10 px-4 text-center md:text-left'>
    <h1 className='text-3xl md:text-4xl font-bold mb-4 leading-10'>Albatre apporte son <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">expertise comptable</span>, de la startup à la multinationale</h1>
    <p className='text-base md:text-lg mb-6'>Chez Albâtre Finance et Conseils, nous avons une mission claire : fournir des services de comptabilité et de commissariat aux comptes de qualité adaptés aux besoins uniques de chaque client. Votre succès est notre priorité. Ensemble, bâtissons un avenir financier solide et prospère. Notre cabinet est 100% digital.</p>
    <div className='flex flex-col md:flex-row gap-6'>
      <Bouton texte="Nos services" taille='grand' variante='primaire' />
      <Bouton texte="Nous contacter" taille='grand' variante='outline' />
    </div>
  </div>
  <div className='flex justify-center mt-8 md:mt-0'>
    <Image src="/heroimg.svg" alt="Image héro" width={500} height={400} className="rounded-lg" />
  </div>
</div>


  )
}