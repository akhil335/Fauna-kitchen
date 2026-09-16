import { ChefHat, Heart, Leaf, type LucideIcon } from "lucide-react"
import Animated from "../components/Animated"
import { featuresData } from "../data"

interface iconMapType {
    [key: string]: LucideIcon;
}

const iconMap: iconMapType = {
    ChefHat,
    Leaf,
    Heart
}

const Features = () => {
 
  return (
    <section id="features" className='mt-44 overflow-x-hidden'>
         <div className="text-center mb-16">
            <Animated delay={0.2}>
                <p className="font-medium uppercase mb-3.5">What Sets Us Apart</p>
            </Animated>
            <Animated>
                <h2 className="text-4xl md:text-5xl text-balance mx-auto max-w-lg">
                    Crafting memorable dining experiences
                </h2>
            </Animated>
        </div>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center gap-14 px-4">
            <div className="space-y-10 max-w-md">
            {
                featuresData.map((data, i) => {
                    const IconComponent = iconMap[data.icon]
                    
                    return (
                        <Animated key={i} y={150} delay={i * 0.15} className="flex gap-4">
                            {
                                IconComponent && <IconComponent className="size-5 shrink-0 mt-0.5" />
                            }
                            <div>
                                <h3 className="text-xl font-medium">{data.title}</h3>
                                <p className="font-light max-w-sm">{data.description}</p>
                            </div> 
                        </Animated>
                    )
                })
            }
            </div>
            <Animated x={50} y={0}>
                <img src="src/assets/chef.png" alt="Chef" className="w-full max-w-sm h-111 rounded-3xl object-cover" />
            </Animated>
        </div>
    </section>
  )
}

export default Features