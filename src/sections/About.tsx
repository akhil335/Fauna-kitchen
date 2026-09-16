import Animated from "../components/Animated"
import { aboutPoints } from "../data"

const About = () => {
  return (
    <section id="about" className="mt-40">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto px-4">
            <div className="col-span-full md:col-span-3 ">
                <Animated y={0} scale={0.8}>
                    <img className="rounded-3xl object-cover" src={"src/assets/about.png"} alt="Dish" />
                </Animated>
            </div>
            <div className="col-span-full md:col-span-3 md:ml-10">
                <Animated y={0} scale={0.8} className="flex">
                    <img className="rounded-3xl object-cover" src={"src/assets/iconL.png"} alt="Icon-left" />
                    <span className="font-medium uppercase">Crafted with passion</span>
                    <img className="rounded-3xl object-cover" src={"src/assets/iconR.png"} alt="Icon-right" />
                </Animated>
                <Animated y={0}>
                    <h2 className="text-balance mt-5 text-4xl md:text-5xl">Experience dinning beyond expectation</h2>
                </Animated>
                <Animated y={0} delay={0.2}>
                    <p className="font-light mt-4.5 max-w-sm">We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit.</p>
                </Animated>
                <Animated y={0} className="bg-primary text-highlight p-2 pr-8 flex items-center gap-3 w-fit rounded-lg mx-auto md:mx-0 mt-9">
                        <img src={"src/assets/about.png"} alt="Bistro location preview" className="size-15 rounded-lg object-cover shrink-0" />
                        <div className="flex gap-2 flex-col">
                            <p className="font-medium">Bistro royale, NY</p>
                            <a href="#">View on map</a>
                        </div>
                </Animated>
            </div>
        
            {
                aboutPoints.map((ap, i) => {
                    return (
                    <Animated delay={0.3*i} y={0} key={ap.heading1} className="col-span-2 mt-30">
                        <div className="flex flex-col gap-5 font-geist justify-center">
                            <h2 className="font-semibold text-5xl text-center">{ap.heading1}</h2>
                            <h3 className="font-bold text-3xl text-center">{ap.heading2}</h3>
                        </div>
                            <p className="mt-4 font-medium text-center text-balance">{ap.heading3}</p>
                    </Animated>
                    )
                })
            }
        </div>
    </section>
  )
}

export default About