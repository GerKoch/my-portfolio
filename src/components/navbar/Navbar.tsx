import { Link } from "react-scroll"
import Services from "../services/Services"
import Tecnologies from "../tecnologies/Tecnologies"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"
import Home from "../home/Home"



const Navbar = () => {
  return (
    <>
      <nav className="fixed flex flex-row bg-[#343434] items-center justify-end px-10 w-screen h-[100px] top-0 left-0 z-10 shadow-md">
        <ul className="flex px-20 space-x-6 text-white uppercase">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-500"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="tecnologies"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-500"
            >
              Tecnologías
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-500"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-500"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <Home />
        </section>
        <section
          id="services"
          className="h-screen bg-blue-500 flex items-center justify-center"
        >
          <Services />
        </section>
        <section
          id="tecnologies"
          className="h-screen bg-red-500 flex items-center justify-center"
        >
          <Tecnologies />
        </section>
        <section
          id="portfolio"
          className="h-screen bg-slate-500 flex items-center justify-center"
        >
          <Portfolio />
        </section>
        <section
          id="contact"
          className="h-screen bg-slate-900 flex items-center justify-center"
        >
          <Contact />
        </section>
      </div>
    </>
  )
}

export default Navbar




// const Navbar = () => {
//   return (
//     <div className="flex flex-row items-center justify-end px-0 text-zinc-300 w-screen h-[100px] ">
//       <div className="uppercase flex flex-row items-center justify-between px-20">
//         <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer px-5">Servicios</p>
//         <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer px-5">Tecnologías</p>
//         <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer px-5">Portfolio</p>
//         <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer px-5">Contacto</p>
//       </div>
//     </div>
//   )
// }

// export default Navbar