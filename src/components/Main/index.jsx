import { motion } from "framer-motion";

const Main = () => {
  const sentence = {
    hidden: { opacity: 1, y: 75},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const animateProps = {
    className: "inline-block whitespace-pre",
    variants: sentence,
    initial: "hidden",
    animate: "visible",
  }

  const greeting = ["Hi, ", "I am ", "Anurag"];
  const sentence1 = ["User ", "Experience ", "Designer"];
  const sentence2 = ["and ", "UX ",  "Researcher"];

  return (<>
    <section id="home">
      <div className="relative z-[2]">
        <h1>
          <span className="block clippy">
            {greeting.map((chunk, idx) => {
              let displayChunk = null;
              if (chunk.startsWith("Anurag")) {
                displayChunk = <span className="font-bold text-custom">{chunk}</span>
              } else {
                displayChunk = chunk;
              }
              return <motion.span {...animateProps} key={`${chunk}-${idx}`} transition={{ease: [0.48,0.03,0.46,1.17], delay: 1 + (0.1 *idx), duration: 0.5}}>{displayChunk}</motion.span>
            })}
          </span>
          </h1>
        <h2>
          <span className="block clippy">
            {sentence1.map((chunk, idx) => {
              return <motion.span {...animateProps} key={`${chunk}-${idx}`} transition={{ease: [0.48,0.03,0.46,1.17], delay: 0.8 + (0.1 *idx), duration: 1}}>{chunk}</motion.span>
            })}
          </span>
          <span className="block clippy">
            {sentence2.map((chunk, idx) => {
              return <motion.span {...animateProps} key={`${chunk}-${idx}`} transition={{ease: [0.48,0.03,0.46,1.17], delay: 1.1 + (0.1 *idx), duration: 1}}>{chunk}</motion.span>
            })}
          </span>
        </h2>
      </div>
    </section>
  </>);
}

// <motion.span className="block" variants={sentence} initial="hidden" animate="visible" transition={{ease: [0.48,0.03,0.46,1.17], delay: 0.5, duration: 1}}>User Experience Designer</motion.span>
export default Main;