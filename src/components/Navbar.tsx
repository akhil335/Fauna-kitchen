import { useEffect, useState } from "react"
import { navLinks } from "../data/index"
import BookTableButton from "./BookTableButton"
import { MenuIcon } from "lucide-react"


const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(()=> {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll) 

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <>
    <nav className={`fixed z-20 w-full ${scrolled ? "bg-foreground/70 shadow-card backdrop-blur-md" : "bg-transparent"} px-auto top-0 transition-all duration-300`}>
        <div className="flex justify-between px-4 py-4 items-center max-w-7xl mx-auto">
            <div className="flex gap-2 items-center">
                <a href="/">
                    <img src="/logo.svg" alt="logo" className="w-12.5" />
                </a>
                <span className="font-bold">Fauna kitchen</span>
            </div>

            {/* Desktop nav liks */}
            <div className="hidden md:flex gap-8">
                {
                    navLinks.map((link, i) => {
                    return (
                        <a key={i} href={link.href} className="nav-link font-medium" >{ link.name }</a>
                        )
                    })
                }
            </div>

            <div className="hidden md:block"><BookTableButton /></div>

            {/* Mobile menu link */}
            <button onClick={()=> setIsMobileOpen(true)} className="md:hidden bg-foreground p-2 rounded-md aspect-square border border-primary/20">
                <MenuIcon className="fill-primary" />
            </button>
        </div>
    </nav>

    {/* Mobile Menu*/}
    <div className={`flex flex-col items-center justify-center p-8 fixed z-20 inset-0 bg-foreground/60 backdrop-blur-md transition-tranform duration-300 
        ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center space-y-6 font-medium">
            {
                navLinks.map((navLink, i) => {
                    return (
                        <a key={i} href={navLink.href} className="text-2xl text-primary hover:text-primary/60 transition">{navLink.name}</a>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Navbar