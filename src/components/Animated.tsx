import { motion } from "motion/react"
import type { ReactNode } from "react";

interface AnimatedProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  onClick?: (event: React.MouseEvent)=> void
}

const Animated = ({ children, delay=0, y=50, x=0, scale=1, className }: AnimatedProps) => {

  return (
    <motion.div initial={{ opacity: 0, y, x, scale }} whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }} transition={{ delay, type: "spring", stiffness: 320, damping: 70, mass: 1 }} viewport={{ once: true }} className={ className } >
        { children }
    </motion.div>
  )
}

export default Animated