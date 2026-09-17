import Animated from "../components/Animated"
import BookTableButton from "../components/BookTableButton"
import { timingData } from "../data"

const Timing = () => {
  return (
    <section id="timing" className="px-4 mt-44">
        <Animated scale={0.8} className="w-full max-w-5xl h-162.75 rounded-3xl mx-auto bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-14 overflow-hidden bg-[url('/assets/restro-timing.png')]">
            <div className="bg-foreground rounded-3xl p-8 w-full max-w-xs">
                <Animated delay={0.2}>
                    <h3 className="font-medium text-xl mb-8">Opening time:</h3>
                </Animated>

                <div className="space-y-7">
                    {
                        timingData.map((item, i) => {
                            return (
                                <Animated key={i} delay={i * 0.1} className="flex items-center justify-between">
                                    <span className="font-medium">{item.day}</span>
                                    <span className={`font-medium ${item.hours === 'Closed' ? "text-primary/60" : "text-primary/80"}`}>{item.hours}</span>
                                </Animated>
                            )
                        })
                    }
                </div>

                <Animated delay={1} className="mt-12 flex justify-center">
                    <BookTableButton />
                </Animated>
            </div>
        </Animated>
    </section>
  )
}

export default Timing