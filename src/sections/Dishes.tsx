import { motion } from "motion/react"
import Animated from "../components/Animated"
import { dishes } from "../data"
import { useState } from "react"

interface RotateTypes {
    [key: string]: number;
}

const Dishes = () => {
  const [rotate, setRotate] = useState<RotateTypes>({})
   
  return (
    <section id="dishes" className="mt-44">
        <div className="text-center mb-16">
            <Animated delay={0.2}>
                <p className="font-medium uppercase mb-3.5">Chef's signature selection</p>
            </Animated>
            <Animated>
                <h2 className="text-4xl md:text-5xl text-balance mx-auto max-w-lg">
                    Discover our signature dishes
                </h2>
            </Animated>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto">
            {
                dishes.map((dish, i) => {
                    return (
                        <Animated key={i} y={80} delay={i * 0.1} className="flex flex-col items-center text-center shrink-0 cursor-pointer">
                            <motion.div animate={{ rotate: rotate[i] || 0}} transition={{ type: "spring", stiffness: 80, damping: 15}} onMouseEnter={()=> 
                                setRotate((prev) => ({ ...prev, [i]: (prev[i] || 0) + 180}))
                                }
                                onMouseLeave={()=> 
                                setRotate((prev) => ({ ...prev, [i]: 0}))
                                }>
                                <img src={dish.img} alt={dish.title} className="size-30 md:size-35 object-cover" />
                            </motion.div>
                            <h3 className="mt-5">{dish.title}</h3>
                            <p className="mt-2 font-medium">{dish.price}</p>
                        </Animated>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Dishes