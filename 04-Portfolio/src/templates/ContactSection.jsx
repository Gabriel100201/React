import { useContext } from "react"
import { Contact } from "../components/Contact"
import { ScrollContext } from "../context/refs"
import { useParallax } from "react-scroll-parallax"

export const ContactSection = () => {
  const { contactoRef } = useContext(ScrollContext)
  return (
    <section ref={contactoRef} className="w-full mt-40">
      <h2 className="text-primary-50 font-semibold text-5xl mb-12">Contacto</h2>
      <Contact></Contact>
    </section>
  )
}