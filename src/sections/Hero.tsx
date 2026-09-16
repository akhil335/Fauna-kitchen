import { Star, StarHalf } from "lucide-react"
import Animated from "../components/Animated"
import BookTableButton from "../components/BookTableButton"
import { avatars } from "../data"

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-[url(assets/heroBanner.png)] bg-center bg-no-repeat bg-cover px-4 pt-20">
        <Animated y={-20} delay={0.2}>
            <p className="text-muted font-semibold text-center">WHERE FLAVOR MEETS ELEGANCE</p>
        </Animated>
        <Animated y={-20} delay={0.3}>
            <h1 className="max-w-4xl text-background font-medium text-4xl md:text-6xl font-geist text-wrap text-center mt-5">Crafted for unforgettable dining moments</h1>
        </Animated>
         <Animated y={-20} delay={0.4}>
            <p className="max-w-md mt-3 text-background font-light text-center">Experience carefully curated menu fresh local ingredients and impeccable service in space made for every celebration</p>
        </Animated>
         <Animated y={-20} delay={0.4}>
            <div className="mt-9">
                <BookTableButton />
            </div>
        </Animated>
        <Animated className="mt-9 flex flex-col gap-2 md:gap-0 md:flex-row justify-center items-center flex-wrap" y={-20} delay={0.4}>
            <div className="flex -space-x-3.5 pr-3">
                {
                    avatars.map((avatar, i) => {
                        return (
                            <img className="cursor-pointer size-10 rounded-full border-3 hover:translate-y-px transition" key={i} src={avatar} alt="guest" />
                        )
                    })
                }
            </div>
            <div className="flex flex-col md:gap-1">
                <div className="flex justify-center md:justify-start ">{[...Array(5)].map((_, i) => i === Array(5).length - 1 ? <StarHalf className="cursor-pointer size-3.5 font-medium fill-primary hover:fill-primary-hover" key={i} /> : <Star className="cursor-pointer size-3.5 font-medium fill-primary hover:fill-primary-hover" key={i} /> )}</div>
                <p className="text-primary-50 font-normal">4.6/5 Rating - 10,000 reviews</p>
            </div>
        </Animated>
    </section>
  )
}

export default Hero