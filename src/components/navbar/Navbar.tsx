import { Link } from "react-scroll"
import Tecnologies from "../tecnologies/Tecnologies"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"
import Home from "../home/Home"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt1 } from "react-icons/hi"



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className="hidden sm:fixed sm:flex flex-row bg-[#252525] items-center justify-end px-10 md:px-15 w-screen h-[100px] top-0 left-0 z-10 shadow-md">
        <ul className="flex px-20 space-x-6 text-xl uppercase">
          <li className="text-amber-700">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-600"
            >
              Home
            </Link>
          </li>
          <li className="text-amber-600">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-700"
            >
              Portfolio
            </Link>
          </li>
          <li className="text-amber-500">
            <Link
              to="tecnologies"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-700"
            >
              Tecnologías
            </Link>
          </li>
          <li className="text-amber-400">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-700"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="sm:hidden fixed top-0 left-0 w-full bg-[#252525] z-10 shadow-md">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="text-white text-2xl">
          </div>
          <button
            onClick={toggleMenu}
            className="text-amber-500 text-3xl w-fit ml-auto"
          >
            {isMenuOpen ? <AiOutlineClose className="h-8 w-8" /> : <HiMenuAlt1 className="h-8 w-8" />}
          </button>
        </div>


        {isMenuOpen && (
          <div className="sm:hidden bg-[#252525] px-6 py-4 space-x-4 text-center">
            <ul className="text-xl space-y-4 uppercase">
              <li className="text-amber-700">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-amber-600"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="text-amber-600">
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-amber-700"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className="text-amber-500">
                <Link
                  to="tecnologies"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-amber-700"
                  onClick={toggleMenu}
                >
                  Tecnologías
                </Link>
              </li>
              <li className="text-amber-400">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-amber-700"
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div>
        <section id="home">
          <Home />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="tecnologies">
          <Tecnologies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Navbar
