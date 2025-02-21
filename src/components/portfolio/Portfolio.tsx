import MarieImage from "../../assets/images/Marie-Lanasdesktop.png"
import PsiImage from "../../assets/images/Psiquiatria-Hernandez-desktop2.png"

const Portfolio = () => {
  return (
    <div className="bg-[#252525] flex flex-col px-30 py-45 pb-[100px] gap-10 text-zinc-200 w-screen h-screen">
      <h1 className="flex items-start text-amber-500 text-4xl">Proyectos</h1>
      <div className="flex flex-row justify-around gap-7 w-full h-full">
        <div className="bg-amber-500 w-full">
          <img
            src={MarieImage}
            alt="Marie Lanas image"
          />
          <p>3 años</p>
        </div>
        <div className="bg-amber-500 w-full">
          <img
            src={PsiImage}
            alt="Psiquiatria image"
          />
          <p>3 años</p>
        </div>


      </div>
    </div >
  )
}

export default Portfolio 