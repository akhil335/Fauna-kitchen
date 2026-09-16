import { Mail, Phone } from "lucide-react"
import { quickLinks, sitemapLinks } from "../data"
import { socialLinks } from "../data/socialLinks"
import Animated from "./Animated"

const Footer = () => {
  return (
    <section className="px-4 relative mt-44 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-6 justify-between pb-8">

                <div className="flex flex-col items-start text-left">
                    <Animated className="flex gap-2 items-center">
                            <a href="/">
                                <img src="/logo.svg" alt="logo" className="w-12.5" />
                            </a>
                            <span className="font-bold">Fauna kitchen</span>
                    </Animated>
                    <Animated delay={0.2}>
                        <p className="mt-3 text-sm/3.5 text-primary/70 font-medium max-w-81.25">Serving freshly prepared dishes with authentic flavors, premium ingredients and exceptional hospitality every day.</p>
                    </Animated>
                    <div className="flex items-center gap-1.5 mt-6">
                        {
                            socialLinks.map((link, i) => {
                                return (
                                    <Animated key={i} delay={0.1 * i}>
                                        <a href={link.href} className="size-7.5 rounded-full border border-primary/30 grid place-content-center">{link.icon}</a>
                                    </Animated>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <p className="font-medium mb-5">Quick links</p>
                    <div className="flex flex-col gap-2.5">
                        {
                            quickLinks.map((link, i) => {
                                return (
                                    <Animated key={i} delay={0.5 * i}>
                                        <a href={link.href} className="text-primary/80 hover:text-primary/60">{link.name}</a>
                                    </Animated>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <p className="font-medium mb-5">Get in Touch</p>
                    <div className="space-y-2">
                        <Animated>
                            <a href="mailto:hello@example.com" className="flex items-center gap-1 text-primary/80 hover:text-primary/60">
                                <Mail size={16} className="shrink-0" />
                                hello@example.com
                            </a>
                        </Animated>
                        <Animated>
                            <a href="tel:987-654-3210" className="flex items-center gap-1 text-primary/80 hover:text-primary/60">
                                <Phone size={16} className="shrink-0" />
                                987-654-3210
                            </a>
                        </Animated>
                    </div>
                </div>

                <div>
                    <p className="font-medium mb-5">Sitemap</p>
                    <div className="flex flex-col gap-2.5">
                        {
                            sitemapLinks.map((link, i) => {
                                return (
                                    <Animated key={i} delay={0.5 * i}>
                                        <a href={link.href} className="text-primary/80 hover:text-primary/60">{link.name}</a>
                                    </Animated>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center border-t border-primary/20 py-4.5 text-primary/80">
                <p>© 2026. All Right Reserved.</p>
            </div>
        </div>

        {/* Watermark logo */}
        <div className="absolute bottom-0 md:inset-0 text-center select-none -z-1 pointer-events-none">
            <span className="text-[100px] md:text-[300px] font-geist font-semibold text-primary/10 tracking-wide">Fauna</span>
        </div>
    </section>
  )
}

export default Footer