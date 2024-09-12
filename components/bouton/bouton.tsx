import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface BoutonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  texte?: string;
  icone?: IconType;
  variante?: 'primaire' | 'secondaire' | 'outline';
  taille?: 'petit' | 'moyen' | 'grand';

}

function Bouton({
  texte,
  icone: Icone,
  variante = 'primaire',
  taille = 'moyen',
 
  className = '',
  ...props
}: BoutonProps) {
  const baseClasses = 'font-bold rounded transition-colors';
  const varianteClasses = {
    primaire: 'bg-primary text-white hover:bg-gray-100 hover:border-primary hover:border hover:text-primary',
    secondaire: 'bg-secondary text-white  hover:bg-gray-100',
    outline: 'border border-primary text-primary hover:bg-gray-100'
  };
  const tailleClasses = {
    petit: 'px-2 py-1 text-sm',
    moyen: 'px-4 py-2',
    grand: 'px-6 py-3 text-lg'
  };

  const classes = `
    ${baseClasses}
    ${varianteClasses[variante]}
    ${tailleClasses[taille]}
    ${className}
  `.trim();

  return (
    <button className={classes} {...props}>
      {Icone && <Icone className="inline-block mr-2" />}
      {texte}
    </button>
  );
}

export default Bouton;