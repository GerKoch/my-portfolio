import Tecnologies from "../tecnologies/Tecnologies"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"
import Home from "../home/Home"

const Dashboard = () => {
  return (
    <>
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
    </>
  )
}

export default Dashboard