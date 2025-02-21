import { Link } from "react-scroll"
// import Services from "../services/Services"
import Tecnologies from "../tecnologies/Tecnologies"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"
import Home from "../home/Home"



const Navbar = () => {
  return (
    <>
      <nav className="fixed flex flex-row bg-[#252525] items-center justify-end px-10 w-screen h-[100px] top-0 left-0 z-10 shadow-md">
        <ul className="flex px-20 space-x-6  text-xl uppercase">
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
              to="tecnologies"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-700"
            >
              Tecnologías
            </Link>
          </li>
          {/* <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-700"
            >
              Servicios
            </Link>
          </li> */}
          <li className="text-amber-500">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-amber-700"
            >
              Portfolio
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

      <div>
        <section id="home">
          <Home />
        </section>
        <section id="tecnologies">
          <Tecnologies />
        </section>
        {/* <section id="services">
          <Services />
        </section> */}
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
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