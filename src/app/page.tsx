import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import AboutsUs from "./components/aboutus"
import Testimonials from "./components/testimonials"
import ContactUs from "./components/contactus"

export default function Home() {
  return(
    <>
    <Header/>
    <Hero />
    <Services />
    <AboutsUs />
    <Testimonials />
    <ContactUs />
    </>
  )
}