import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { RiFacebookCircleLine } from "react-icons/ri"


const Home = () => {
  return (
    <div className="bg-[#343434] flex flex-col items-start p-20 text-zinc-200 w-screen h-[500px]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col justify-center gap-7">
          <h1 className="uppercase text-5xl">Desarrollador Front-End</h1>
          <h2 className="text-2xl w-[70%]">Soy Germán y me apasiona crear sitios web bellos y responsivos aplicando las tecnologías: JavaScript Vanilla, React y Next.js sobre todo.</h2>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaWhatsapp size={35} />
          <FaInstagram size={35} />
          <RiFacebookCircleLine size={35} />
          <FaGithub size={35} />
          <FaLinkedin size={35} />
        </div>

      </div>

    </div>
  )
}

export default Home