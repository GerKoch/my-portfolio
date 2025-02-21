import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { RiFacebookCircleLine } from "react-icons/ri"


const ContactLinks = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <a href="https://wa.me/5493364621314" target="_blank">
        <FaWhatsapp size={35} className="text-[#3a3a3a] hover:text-amber-500" />
      </a>
      <a href="https://www.instagram.com/g357er7/" target="_blank">
        <FaInstagram size={35} className="text-[#3a3a3a] hover:text-amber-600" />
      </a>
      <a href="https://www.facebook.com/ger.jav.1/" target="_blanck">
        <RiFacebookCircleLine size={40} className="text-[#3a3a3a] hover:text-amber-700" />
      </a>
      <a href="https://github.com/GerKoch" target="_blanck">
        <FaGithub size={35} className="text-[#3a3a3a] hover:text-amber-600" />
      </a>
      <a href="https://www.linkedin.com/in/germ%C3%A1n-koch-584548224/" target="_blank">
        <FaLinkedin size={35} className="text-[#3a3a3a] hover:text-amber-500" />
      </a>
    </div>
  )
}

export default ContactLinks