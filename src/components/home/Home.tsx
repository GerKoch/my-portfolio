import image from "../../assets/images/Ger4-1.png"
import ContactLinks from "../contactLinks/ContactLinks"



const Home = () => {
  return (
    <div className="bg-[#252525] flex flex-col sm:flex-row items-center justify-center px-4 py-6 pb-[100px] sm:px-8 sm:py-12 md:px-16 lg:px-30 lg:pt-44 w-screen h-screen">

      <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:pb-20 sm:pl-0">
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-500">Hola</h2>
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-zinc-400">Es un gusto conocerte!</h1>
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-amber-500">
            Me llamo <span className="text-amber-400">Germán Koch</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-5xl text-amber-500">Soy desarrollador Front-End</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-amber-600 w-full sm:w-[70%]">
            Me apasiona crear sitios web únicos y responsivos aplicando las tecnologías: JavaScript, React y Next.js sobre todo.
          </h2>
        </div>
        <ContactLinks />
      </div >

      <div className="mt-6 sm:mt-0 sm:ml-8 px-4 sm:pb-10 sm:pr-10">
        <div className="flex justify-center sm:justify-start border-8 bg-[#2e2e2e] border-amber-700 w-full sm:w-[370px] rounded">
          <img
            src={image}
            alt="imagen de perfil"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div >
  )
}

export default Home