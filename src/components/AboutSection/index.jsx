import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = (({ sectionName, sectionContent }) => {

  const [headingRef, inViewHeading] = useInView();
  const [sectionRef, inViewSection] = useInView();

  const headingControls = useAnimation();
  const sectionControls = useAnimation();

  const sentence = {
    hidden: { opacity: 0, y: 75,},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const animateProps = {
    variants: sentence,
    initial: "hidden",
    className: "block flex-1",
  }

  const transitionProps = {
    ease: [0.25, 0.13, 0.39,1],
    delay: 0.5,
    duration: 0.75,
  }

  useEffect(() => {
    if (inViewHeading) {
      headingControls.start("visible");
    }

    if (inViewSection) {
      sectionControls.start("visible");
    }
  }, [headingControls, sectionControls, inViewHeading, inViewSection]);

  return (
    <div className="about-section">
      <h5 className="clippy">
        <motion.span {...animateProps} animate={headingControls} transition={transitionProps}>
          {sectionName}
        </motion.span>
      </h5>
      <div ref={headingRef} className="flex mt-[100px] clippy">
        <div className="flex-1"></div>
        <motion.span {...animateProps} animate={sectionControls} transition={{...transitionProps, delay: 1}}>
          {sectionContent}
        </motion.span>
        <span ref={sectionRef}></span>
      </div>
    </div>
  )
})

export default AboutSection;