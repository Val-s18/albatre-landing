import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import CardEquipe from './CardEquipe'


const tabsData = [
  {
    title: "Youssef Boulahdid",
    subtitle: "Expert-comptable et commissaire aux comptes",
    content: `Expert-comptable et commissaire aux comptes
      Fort de 13 ans d’expérience professionnelle, dont 6 ans en tant qu’auditeur financier
      chez EY et EXCO, Youssef a développé une expertise solide en gestion des comptes
      consolidés.
      Grâce à son expérience dans le département de finance d’Allianz France, il a pu
      jouer un rôle central dans la conception et la gestion d’un algorithme dédié à la
      justification des comptes comptables. Une étroite collaboration avec les équipes des
      directions Finance, Actuariat technique et Comptable, lui ont permis de les
      accompagner sur la transformation des infocentres techniques pour les aligner aux
      nouvelles normes IFRS 9 et 17.
      En tant que partenaire clé du Directeur Comptable Non-Vie, il a contribué activement
      à la production des comptes techniques lors des clôtures mensuelles et annuelles.
      En parallèle, il a développé ses compétences grâce à son expérience en cabinet
      comptable, ce qui lui a permis d’accompagner diverses entreprises, notamment dans
      le secteur de l’assurance, ainsi que des TPE/PME dans des secteurs variés tels que
      l’hôtellerie et le commerce.`,
    image: "/youssef.png"
  },
  {
    title: "Elise L",
    subtitle: "Collaboratrice comptable",
    content: `Avec un parcours riche et diversifié, Élise incarne la polyvalence et le professionnalisme au service de la comptabilité.
      Elise a débuté ses études dans le secteur de l’hôtellerie, où elle a acquis une solide formation en gestion hôtelière et en comptabilité appliquée. Elle a ensuite enrichi son profil avec une Licence en Langues Étrangères Appliquées au Commerce, lui offrant ainsi une ouverture à l’international et des compétences en gestion commerciale.
      Ayant débuté sa carrière dans le secteur hôtelier, Élise a rapidement orienté sa carrière vers la comptabilité, animée par le désir de s'impliquer dans la gestion financière. En quête de nouveaux défis, elle a choisi de se reconvertir vers le métier de comptable. Elle a obtenu un BTS Comptabilité et Gestion, puis un Bachelor Responsable Mission d’Expertise Comptable, durant lequel elle a été l’élève de Youssef Boulahdid. Grâce à ces formations, elle a su allier rigueur technique et vision stratégique, ce qui lui permis de perfectionner sa maîtrise des principes comptables.
      Son expérience professionnelle est tout aussi riche et variée. Élise a occupé des postes de comptable en association et a également intégré le service des ressources humaines, où elle a acquis des compétences en gestion administrative du personnel. Cette diversité de fonctions lui permet aujourd'hui d’avoir une vision globale des besoins d'une entreprise.
      En tant que collaboratrice en cabinet comptable, elle a géré un portefeuille clients composé d'entreprises variées, allant de l’hôtellerie au BTP, en passant par le commerce. 
      Son sens de l’organisation, son souci du détail et son engagement envers ses clients font d'Élise une professionnelle de confiance, capable de répondre à des problématiques comptables complexes tout en offrant un accompagnement personnalisé.`,
    image: "/youssef.png"
  },
  {
    title: "Peggy D",
    subtitle: "Collaboratrice comptable",
    content: `Peggy, forte d'une expérience multidisciplinaire, est une collaboratrice clé au sein d'Albâtre Finance et Conseils. Avec un parcours riche et varié, elle apporte une expertise unique à notre cabinet, alliant rigueur, adaptabilité et un sens aigu du service client.
      Peggy a débuté sa carrière dans le secteur exigeant de l'aéronautique, où elle a occupé des postes à responsabilité tels que planificatrice de vol et responsable du bureau d'études et de formation. Cette première expérience lui a permis de développer une grande capacité d’analyse, ainsi qu’une vision globale des processus et des contraintes opérationnelles.
      Après plusieurs années dans l’aéronautique, Peggy s’est lancée dans l'entrepreneuriat en devenant gérante d’un salon de beauté et d’une société de services. Elle a également acquis une solide expérience dans le commerce et la grande distribution, où elle a renforcé ses compétences en gestion d’équipe, en relation client et en développement commercial.
      C'est avec une volonté de diversification que Peggy a entamé une reconversion en comptabilité, se formant avec succès en obtenant un BTS Comptabilité et Gestion, suivi d'un Bachelor Responsable en Mission d'Expertise Comptable. Son parcours en comptabilité l'a amenée à intégrer deux cabinets d'expertise comptable avant de rejoindre Albâtre Finance et Conseils, où elle contribue désormais avec son savoir-faire à accompagner nos clients dans la gestion et l'optimisation de entreprise.
      Dotée d'une forte capacité d'adaptation et d'une véritable approche pluridisciplinaire, Peggy excelle dans le traitement des dossiers complexes et est animée par le souci constant d'offrir des solutions personnalisées à chacun de nos clients.`,
    image: "/youssef.png"
  }
];

export default function FeaturesHome02() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t text-primary border-slate-200">
          <div className="max-w-xl md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
                  <CardEquipe tabsData={tabsData} />
          </div>

        </div>
      </div>
    </section>
  )
}