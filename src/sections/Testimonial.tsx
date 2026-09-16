import { Star } from "lucide-react"
import Animated from "../components/Animated"
import { testimonials } from "../data"

const Testimonial = () => {
  return (
    <section id="testimonial" className="mt-44 max-w-7xl px-4 mx-auto">
         <div className="text-center mb-16">
            <Animated delay={0.2}>
                <p className="font-medium uppercase mb-3.5">LOVED BY FOOD LOVERS</p>
            </Animated>
            <Animated>
                <h2 className="text-4xl md:text-5xl text-balance mx-auto max-w-lg">
                    What Our Guests Say
                </h2>
            </Animated>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                testimonials.map((testimonial, i) => {
                    return(
                        <Animated delay={0.1 * i} key={i} className="shadow-glow flex flex-col rounded-lg p-7 border border-primary/20 hover:bg-primary-hover/10">
                            <div className="flex">{
                            [...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-primary" /> )}
                            </div>
                            <p className="font-medium text-md text-balance mt-6">
                                "{testimonial.review}"
                            </p>
                            <Animated className="flex gap-4 items-center mt-4.5">
                                <img className="cursor-pointer size-13 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                                <div className="flex flex-col">
                                    <p className="font-bold text-md">{testimonial.name}</p>
                                    <span className="text-sm">{testimonial.location}</span>
                                </div>
                            </Animated>
                        </Animated>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Testimonial