import { motion } from "framer-motion";

const Main = () => {
  const sentence = {
    hidden: { opacity: 1, y: 75},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  return (<>
    <section id="home">
      <div className="relative z-[1]">
        <h1>Hi, I am <span className="font-bold text-custom">Anurag</span>.</h1>
        <h2>
          <span className="block clippy">
            <motion.span className="block" variants={sentence} initial="hidden" animate="visible" transition={{ease: [0.48,0.03,0.46,1.17], delay: 0.5, duration: 1}}>User Experience Designer</motion.span>
          </span>
          <span className="block clippy">
            <motion.span className="block" variants={sentence} initial="hidden" animate="visible" transition={{ease: [0.48,0.03,0.46,1.17], delay: 0.75, duration: 1 }}>and UX Researcher</motion.span>
          </span>
        </h2>
      </div>
    </section>
  </>);
}

export default Main;