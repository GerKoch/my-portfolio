import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { RiFacebookCircleLine } from "react-icons/ri"
import image from "../../assets/images/Perfil Picture.jpg"

const Home = () => {
  return (
    <div className="bg-[#343434] flex flex-row items-start px-30 py-25 text-zinc-200 w-screen h-[500px]">
      <div className="flex flex-col gap-7 p-0">
        <div className="flex flex-col justify-center gap-7">
          <h1 className="uppercase text-5xl">Desarrollador Front-End</h1>
          <h2 className="text-2xl w-[70%]">Soy Germán y me apasiona crear sitios web bellos y responsivos aplicando las tecnologías: JavaScript, React y Next.js sobre todo.</h2>
        </div>
        <div className="flex flex-row items-center gap-3">
          <a href="https://wa.me/5493364621314" target="_blank">
            <FaWhatsapp size={35} className="text-white hover:text-amber-500" />
          </a>
          <a href="https://www.instagram.com/g357er7/" target="_blank">
            <FaInstagram size={35} className="text-white hover:text-amber-500" />
          </a>
          <a href="https://www.facebook.com/ger.jav.1/" target="_blanck">
            <RiFacebookCircleLine size={40} className="text-white hover:text-amber-500" />
          </a>
          <a href="https://github.com/GerKoch" target="_blanck">
            <FaGithub size={35} className="text-white hover:text-amber-500" />
          </a>
          <a href="https://www.linkedin.com/in/germ%C3%A1n-koch-584548224/" target="_blank">
            <FaLinkedin size={35} className="text-white hover:text-amber-500" />
          </a>
        </div>
      </div>
      <div className="flex border-8 border-zinc-700">
        <img
          src={image}
          alt="image"
          className="flex w-[300px]"
        />
      </div>
    </div>
  )
}

export default Home