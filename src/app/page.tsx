import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import AboutsUs from "./components/aboutus"
import Testimonials from "./components/testimonials"

export default function Home() {
  return(
    <>
    <Header/>
    <Hero />
    <Services />
    <AboutsUs />
    <Testimonials />
    </>
  )
}