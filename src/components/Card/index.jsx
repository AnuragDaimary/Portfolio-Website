import { motion } from "framer-motion"

const Card = ({ projectName }) => {
  const container = {
    show: {
      boxShadow: "inset 0 700px 100px rgba(0, 0, 0, 0.5)",
      transition: {
        duration: 0.3,
      }
    },
    animate: {
      boxShadow: "inset 0 0 0 rgba(0, 0, 0, 0)",
      transition: {
        duration: 0,
      }
    }
  }

  const text = {
    hidden: { 
      opacity: 0,
      translateY: "50px",
      scale: 0.8
    },
    show: { 
      opacity: 1,
      translateY: "0%",
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  }

  return (
    <motion.div className="card" initial="hidden" animate="animate" whileHover="show" variants={container}>
      <motion.p className="text-black" variants={text} >{projectName}</motion.p>
    </motion.div>
  );
};

export default Card;