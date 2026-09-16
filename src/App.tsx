import Footer from "./components/Footer"
import LenisScroll from "./components/LenisScroll"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import BookingProcess from "./sections/BookingProcess"
import CTA from "./sections/CTA"
import Dishes from "./sections/Dishes"
import Faq from "./sections/Faq"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Testimonial from "./sections/Testimonial"
import Timing from "./sections/Timing"

function App() {

  return (
    <>
     <LenisScroll />
      <Navbar />
      <Hero />
      <About />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <Testimonial />
      <Faq />
      <CTA />
      <Footer />
    </>
  )
}

export default App
