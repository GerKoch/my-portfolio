import image from "../../assets/images/German-Koch-perfil.png"
import ContactLinks from "../contactLinks/ContactLinks"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="bg-[#252525] flex flex-col sm:flex-row items-center justify-center px-7 py-6 pb-[100px] sm:px-8 sm:py-12 md:px-16 lg:px-30 lg:pt-44 w-screen h-full sm:h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:pb-20 sm:pl-0 sm:pt-[30px] pt-[100px]"
      >
        <div className="flex flex-col justify-center gap-2 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-500 order-1">Hola</h2>
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-zinc-400 order-2">Es un gusto conocerte!</h1>
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-amber-500 order-3">
            Me llamo <span className="text-amber-400">Germán Koch</span>
          </h1>
          <div className="flex justify-center sm:hidden my-6 order-4">
            <div className="border-8 bg-[#2e2e2e] border-amber-700 w-[300px] rounded">
              <img
                src={image}
                alt="Retrato de German Koch, desarrollador Full Stack"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl text-amber-500 order-5">
            Soy desarrollador Web Full Stack (con enfoque en Front-end)
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-amber-600 w-full sm:w-[70%] order-6">
            Me apasiona crear sitios web únicos, funcionales y responsive, aplicando tecnologías como Next.js, React, Tailwind CSS y TypeScript.
            Actualmente desarrollo soluciones completas que van desde el diseño front-end hasta la lógica backend, incluyendo autenticación, bases de datos, paneles de administración e integraciones con pagos, APIs y más.
          </h2>
        </div>
        <ContactLinks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="hidden sm:block mt-6 sm:mt-0 sm:ml-8 px-4 sm:pb-10 sm:pr-10"
      >
        <div className="flex justify-center sm:justify-start border-8 bg-[#2e2e2e] border-amber-700 w-[350px] sm:w-[370px] rounded">
          <img
            src={image}
            alt="Retrato de German Koch, desarrollador Full Stack"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Home