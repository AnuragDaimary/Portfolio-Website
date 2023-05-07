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

  const transitionProps = {
    ease: [0.25, 0.13, 0.39, 1],
    delay: 0.5,
    duration: 0.75,
  }

  const greeting = ["Hi, I am Anurag, a Product designer and UX Researcher", "making digital experiences for people with a user centric", "approach."]

  return (
    <section id="home">
      <h1>
        {greeting.map((chunk, i) =>{
          let parsedChunk = null;
          if (chunk.includes("Anurag")) {
            parsedChunk = chunk.split("Anurag");
            parsedChunk = <><>{parsedChunk[0]}</><span className="font-bold text-custom">Anurag</span><>{parsedChunk[1]}</></>
          } else {
            parsedChunk = <>{chunk}</>
          }

          return (
          <span key={`greeting-${i}`} className="block clippy">
            <motion.span {...animateProps} transition={{...transitionProps, delay: 0.5 + (0.2 * i)}}>
              {parsedChunk}
            </motion.span>
          </span>);
      })}
      </h1>
    </section>
  );
}

export default Main;