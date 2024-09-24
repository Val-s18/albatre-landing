'use client'

import { useState, useRef, useEffect } from 'react'


export default function valeur() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative text-center">

      <div className="absolute inset-0  pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">


          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-primary text-4xl font-semibold mb-4">Nos valeurs</h2>
            <p className="text-xl text-slate-768  text-primary  ">Excepteur s474 occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
          </div>


          <div className="max-w-3xl mx-auto text-center">


            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12 ">
              <button
                className={`text-center transition-opacity ${tab !== 1 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#2174EA" d="M20 20h6v16h-6z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-primary">Proximité, écoute</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 2 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M33 23v8h3V20H25v3z" />
                      <path fill="#2174EA" d="M20 25h11v11H20z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-primary">Intégrité </div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 3 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M20 27l7-7h-7z" />
                      <path fill="#2174EA" d="M29 20l7 7v-7z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M36 29l-7 7h7z" />
                      <path fill="#2174EA" d="M27 36l-7-7v7z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-primary">Bienveillance </div>
                </div>
              </button>
     
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}