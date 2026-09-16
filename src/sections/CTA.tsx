import { ArrowRight } from "lucide-react"
import Animated from "../components/Animated"
import { floatingDishes } from "../data"

const CTA = () => {
  return (
    <section id="cta" className="overflow-hidden relative bg-primary/60 px-6 flex flex-col justify-center items-center min-h-100 md:min-h-110 mt-44">
        <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none">
            {
                floatingDishes.map((dish, i) => {
                    return (
                        <img key={i} src={dish.src} alt={dish.alt} className={`absolute size-20 md:size-28 lg:size-35 rounded-full object-cover transition-transform duration-300 pointer-events-auto hover:scale-105 ${dish.className}`} />
                    )
                })
            }
        </div>

         <div className="relative z-10 text-center max-w-2xl mx-auto">
                <Animated>
                    <h1 className="text-3xl md:text-[40px] font-medium font-geist text-balance">
                        Every Meal Is Made To Be Remembered
                    </h1>
                </Animated>
                <Animated y={20} delay={0.2}>
                    <p className="mt-4 max-w-sm mx-auto">
                       Join us for fresh ingredients, signature recipes and an unforgettable dining experience.
                    </p>
                </Animated>
                <Animated y={20} delay={0.4} className="flex justify-center items-center">
                    <a href="#booking-process" className="flex gap-2.5 bg-foreground pl-5 pr-2 py-2 rounded-full mt-5.5 transition items-center">
                       Book your Table
                       <span className="bg-muted size-7 rounded-full grid place-content-center"><ArrowRight /></span>
                    </a>
                </Animated>
            </div>
    </section>
  )
}

export default CTA