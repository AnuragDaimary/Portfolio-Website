import { motion } from "framer-motion"
import Resume from "./AnuragDaimaryResume.pdf";
import { Link } from "react-router-dom";

const Navigation = () => {
  const sentence = {
    hidden: { opacity: 0, y: -75},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const animateProps = {
    variants: sentence,
    initial: "hidden",
    animate: "visible",
  }

  const transitionProps = {
    ease: [0.48,0.03,0.46,1.17],
    delay: 2,
    duration: 1,
  }

  return(
    <nav className="nav">
      <motion.p {...animateProps} transition={transitionProps}><Link to="/">Anurag Daimary</Link></motion.p>
      <ul className="nav-buttons">
        <motion.li {...animateProps} transition={{...transitionProps, delay: 2.05 }}>Work</motion.li>
        <motion.li {...animateProps} transition={{...transitionProps, delay: 2.1 }} className="pl-[80px]"><Link to="/about">About</Link></motion.li>
        <motion.li {...animateProps} transition={{...transitionProps, delay: 2.15 }} className="pl-[80px]"><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></motion.li>
      </ul>
    </nav>
  )
}

export default Navigation;