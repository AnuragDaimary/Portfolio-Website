import Card from "../Card"
import Pill from "../Pill";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Project = ({ projectName, projectDesc, vidUrl, skills, inverted, btnDisabled=false }) => {
  const [ref, inView] = useInView({ amount: 1 });
  const controls = useAnimation();

  const sentence = {
    hidden: { opacity: 0, y: 75},
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
    ease: [0.25, 0.13, 0.39, 1],
    delay: 0.5,
    duration: 0.75,
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contentClassName = inverted ? 'project-content-inverted' : 'project-content';
  return (
    <div className={`project ${inverted ? 'flex-row-reverse justify-end': ''}`}>
      <motion.span {...animateProps} transition={transitionProps}>
        <Card vidUrl={vidUrl}/>
      </motion.span>
      <div className={contentClassName}>
        <motion.h4 {...animateProps} transition={transitionProps}>{projectName}</motion.h4>
        <span ref={ref}></span>
        <div className="project-desc">{projectDesc.map((chunk, i) => <motion.p {...animateProps} transition={{...transitionProps, delay: 1.2 + (i * 0.1)}} key={`${chunk}-${i}`}>{chunk}</motion.p>)}</div>
        <div className="skill-container">
          {skills.map((skill, i) => (
            <motion.span key={`${skill}-${i}`} {...animateProps} transition={{...transitionProps, delay: 1.4 + (i*0.1)}}>
              <Pill skillName={skill} />
            </motion.span>
          ))}
        </div>
        {!btnDisabled && <motion.button {...animateProps} transition={{...transitionProps, delay: 1.8}}><a href="/loblaws">Read Case Study</a></motion.button>}
      </div>
    </div>
  )
}

export default Project;