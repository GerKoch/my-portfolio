import MarieImage from "../../assets/images/Marie-desktop-v2.png"
import PsiImage from "../../assets/images/Psiquiatria-Hernandez.png"
import EstJu from "../../assets/images/Estudio-Juridico.jpg"
import EstFeB from "../../assets/images/Estudio-ferreyra-barbra-desktop.png"

const Portfolio = () => {
  return (
    <div className="bg-[#2b2b2b]  flex flex-col px-4 sm:px-30 py-6 sm:py-45 pt-[100px] sm:pt-[150px] gap-10 text-zinc-200 w-full h-full">
      <div className="flex flex-col gap-7 px-0">
        <h1 className="flex items-start text-zinc-700 text-2xl sm:text-3xl md:text-4xl">
          Algunos de mis<span className="text-zinc-600 ml-2.5 mr-2.5">trabajos</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 w-full">
          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a
              href="https://www.marielanas.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver E-commerce Marie Lanas, desarrollado con Next.js, TypeScript y Tailwind CSS"
            >
              <img
                src={MarieImage}
                alt="E-commerce Marie Lanas, desarrollado con Next.js, TypeScript y Tailwind CSS"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">E-commerce con pasarela de pagos de Mercado Pago</h1>
            <h2 className="text-zinc-400">Next.js TypeScript Tailwind CSS</h2>
          </div>
          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a
              href="https://psiquiatriahernandez.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Landing page de Psiquiatría Online, desarrollada con React, Vite y Tailwind CSS"
            >
              <img
                src={PsiImage}
                alt="Landing page de Psiquiatría Online, desarrollada con React, Vite y Tailwind CSS"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">Landing Page</h1>
            <h2 className="text-zinc-400">React  Vite  Tailwind CSS</h2>
          </div>
          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a
              href="https://estudioperetto.site/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Landing Page del Estudio Jurídico desarrollado con React, Vite y Tailwind CSS"
            >
              <img
                src={EstJu}
                alt="Landing page del Estudio Jurídico, desarrollado con React, Vite y Tailwind CSS"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">Landing Page</h1>
            <h2 className="text-zinc-400">React Vite Tailwind CSS TypeScript</h2>
          </div>
          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a
              href="https://estudioferreyrabarbayasociados.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Landing Page del Estudio Jurídico desarrollado con React, Vite y Tailwind CSS"
            >
              <img
                src={EstFeB}
                alt="Landing page del Estudio Jurídico, desarrollado con React, Vite y Tailwind CSS"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">Landing Page</h1>
            <h2 className="text-zinc-400">React Vite Tailwind CSS TypeScript</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio 
