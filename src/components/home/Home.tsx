import image from "../../assets/images/Perfil Picture.jpg"
import ContactLinks from "../contactLinks/ContactLinks"



const Home = () => {
  return (
    <div className="bg-[#252525]  flex flex-row items-center justify-center px-30 py-45 pb-[100px] w-screen h-screen">
      <div className="flex flex-col gap-7 p-0">
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-4xl text-zinc-500">Hola</h2>
          <h1 className="text-4xl text-zinc-400">Es un gusto conocerte!</h1>
          <h1 className="text-4xl text-amber-500">Me llamo <span className="text-amber-400">Germán Koch</span></h1>
          <h1 className="text-5xl text-amber-500">Soy desarrollador Front-End</h1>
          <h2 className="text-2xl text-amber-600 w-[70%]">Me apasiona crear sitios web únicos y responsivos aplicando las tecnologías: JavaScript, React y Next.js sobre todo.</h2>
        </div>
        <ContactLinks />
      </div >
      <div className="flex border-8 border-[#2e2e2e]">
        <img
          src={image}
          alt="image"
          className="flex w-[300px] z-9"
        />
      </div>
    </div >
  )
}

export default Home