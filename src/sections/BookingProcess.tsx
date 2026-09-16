import { Star } from "lucide-react"
import Animated from "../components/Animated"
import { bookingSteps } from "../data"

const BookingProcess = () => {
  return (
    <section id="booking-process" className="mt-44 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 md:gap-25 justify-start md:justify-center">
        <div className="max-w-7xl mx-auto text-center md:text-start">
            <div className="mb-16">
                <Animated delay={0.2}>
                    <p className="font-medium uppercase mb-3.5">Table Reservation Process</p>
                </Animated>
                <Animated delay={0.4}>
                    <h2 className="text-4xl md:text-5xl text-balance">
                        Reserve your table in three simple steps
                    </h2>
                </Animated>
            </div>
            <div className="mt-10 flex flex-col items-center md:items-start justify-start md:justify-center">
                <div className="flex gap-1 mb-7">
                    {
                        [...Array(5)].map((_, i) =>  <Star className="cursor-pointer size-4 font-medium fill-primary hover:fill-primary-hover" key={i} />)
                    }
                </div>
                <p className="font-medium text-md text-balance max-w-2xl">
                    "We had an amazing evening with delicious food, excellent service, and a warm atmosphere. We'll definitely visit again."
                </p>
                <Animated className="flex gap-4 items-center mt-4.5">
                    <img className="cursor-pointer size-13 rounded-full" src={"src/assets/user-2.jpeg"} alt="guest" />
                    <p className="font-medium text-xl">Sofia Martinez</p>
                </Animated>
            </div>
        </div>
        <div className="space-y-14 text-left">
            {
                bookingSteps.map(( step, i) => {
                    return (
                    <Animated key={i} delay={0.1 * i} className="flex gap-9">
                            <span className="font-medium text-lg shrink-0">{step.number}</span>
                            <div>
                                <h3 className="font-medium text-xl mb-5">{step.title}</h3>
                                <p className="font-light">{step.description}</p>
                            </div>
                        </Animated>
                    )
                })
            }
        </div>
    </section>
  )
}

export default BookingProcess