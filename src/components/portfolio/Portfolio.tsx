import MarieImage from "../../assets/images/Marie-Lanasdesktop.png"
import PsiImage from "../../assets/images/Psiquiatria-Hernandez-desktop2.png"
import EstJu from "../../assets/images/Estudio-Juridico.jpg"
import Teslo from "../../assets/images/Teslo-shop.png"


const Portfolio = () => {
  return (
    <div className="bg-[#252525] flex flex-col px-4 sm:px-30 py-6 sm:py-45 pt-[100px] sm:pt-[150px] gap-10 text-zinc-200 w-full h-full">
      <div className="flex flex-col gap-7 p-0">
        <h1 className="flex items-start text-zinc-700 text-2xl sm:text-3xl md:text-4xl">
          Algunos de mis<span className="text-zinc-600 ml-2.5 mr-2.5">trabajos</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 w-full">
          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a href="https://estudioperetto.site/" target="_blank">
              <img
                src={EstJu}
                alt="Estudio Juridico image"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">Landing Page</h1>
            <h2 className="text-zinc-400">React Vite Tailwind CSS</h2>
          </div>

          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a href="https://psiquiatriahernandez.com/" target="_blank">
              <img
                src={PsiImage}
                alt="Psiquiatría Online image"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">Landing Page</h1>
            <h2 className="text-zinc-400">React  Vite  Tailwind CSS</h2>
          </div>

          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <img
              src={Teslo}
              alt="Teslo Shop Image"
              className="bg-zinc-800 w-full h-auto object-contain"
            />
            <h1 className="text-zinc-500">E-commerce</h1>
            <h2 className="text-zinc-400">Next.js TypeScript Tailwind CSS</h2>
          </div>

          <div className="w-full text-2xl flex flex-col border-amber-800 border-b-4 py-2">
            <a href="https://marielanas.vercel.app/" target="_blank">
              <img
                src={MarieImage}
                alt="Marie Lanas image"
                className="bg-zinc-800 w-full h-auto object-contain"
              />
            </a>
            <h1 className="text-zinc-500">E-commerce</h1>
            <h2 className="text-zinc-400">Next.js TypeScript Tailwind CSS</h2>
          </div>


        </div>

      </div>
    </div >
  )
}

export default Portfolio 
