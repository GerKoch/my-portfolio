import image from "../../assets/images/Perfil Picture.jpg"
import ContactLinks from "../contactLinks/ContactLinks"



const Home = () => {
  return (
    <div className="bg-[#343434] flex flex-row items-start px-30 py-25 text-zinc-200 w-screen h-[500px]">
      <div className="flex flex-col gap-7 p-0">
        <div className="flex flex-col justify-center gap-7">
          <h2 className="text-4xl">Hola!</h2>
          <h1 className="text-5xl">Me llamo Germán Koch</h1>
          <h1 className="text-5xl">Soy desarrollador Front-End</h1>
          <h2 className="text-2xl w-[70%]">Me apasiona crear sitios web bellos y responsivos aplicando las tecnologías: JavaScript, React y Next.js sobre todo.</h2>
        </div>
        <ContactLinks />
      </div >
      <div className="flex border-8 border-amber-500">
        <img
          src={image}
          alt="image"
          className="flex w-[300px] z-30"
        />
      </div>
    </div >
  )
}

export default Home