import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Project from "../Project";
import { useEffect } from "react";

const Work = () => {
  const [ref, inView] = useInView({ amount: 1 });
  const controls = useAnimation();

  const sentence = {
    hidden: { opacity: 1, y: 75},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const animateProps = {
    variants: sentence,
    initial: "hidden",
    animate: controls,
    className: "block",
  }

  const transitionProps = {
    ease: [0.25, 0.13, 0.39,1],
    delay: 1,
    duration: 0.75,
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return(
    <section id="selected-work">
      <h3 className="clippy">
        <motion.span {...animateProps} transition={transitionProps}>Selected Work</motion.span>
        <span ref={ref}></span>
      </h3> 
      <Project projectName="Loblaws" projectDesc={["Re-designing the digital experience of Canada's leading","supermarket chain with usability in mind"]} skills={["UX Research", "UI/UX Design", "Case Study"]} />
      <Project projectName="Cura" projectDesc={["Healthcare system bridging the distance between woman", "living in remote communities and accessible parental care", "using modern day biotechnology"]} skills={["UX Research", "UI/UX Design"]} inverted />
      <Project projectName="Presto" projectDesc={["Wearable concept for electronic payment system of Toronto’s", "public transit system"]} skills={["UI Design"]} />
    </section>
  )
}

export default Work;