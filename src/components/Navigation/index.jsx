<<<<<<< Updated upstream
import { motion } from "framer-motion"

const Navigation = () => {
  const sentence = {
    hidden: { opacity: 0, y: -75},
=======
import { motion } from "framer-motion";

const Navigation = () => {
  const sentence = {
    hidden: { opacity: 1, y: -75},
>>>>>>> Stashed changes
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const animateProps = {
<<<<<<< Updated upstream
=======
    className: "inline-block whitespace-pre",
>>>>>>> Stashed changes
    variants: sentence,
    initial: "hidden",
    animate: "visible",
  }

  const transitionProps = {
    ease: [0.48,0.03,0.46,1.17],
    delay: 2,
<<<<<<< Updated upstream
    duration: 0.5,
=======
    duration: 1

>>>>>>> Stashed changes
  }

  return(
  <nav className="nav relative z-[2]">
    <motion.p {...animateProps} transition={transitionProps}>Anurag Daimary</motion.p>
    <ul className="nav-buttons">
      <motion.li {...animateProps} transition={{...transitionProps, delay: 2.05 }}>Work</motion.li>
      <motion.li {...animateProps} transition={{...transitionProps, delay: 2.1 }} className="pl-[80px]">About</motion.li>
      <motion.li {...animateProps} transition={{...transitionProps, delay: 2.15 }} className="pl-[80px]">Resume</motion.li>
    </ul>
  </nav>
  )
}

export default Navigation;