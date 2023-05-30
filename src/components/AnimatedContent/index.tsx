import React from "react";
import useStyles from "components/AnimatedContent/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedContentProps {
  children?: JSX.Element;
  delay?: number;
  viewAnchor?: "top" | "bottom";
  initialDelay?: number;
  from?: "top" | "bottom";
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  delay = 0,
  viewAnchor = "bottom",
  initialDelay = 0.5,
  from = "bottom",
}) => {
  const [contentRef, contentInView] = useInView();
  const animationControls = useAnimation();
  const animateContent = {
    hidden: { opacity: 0, y: from === "bottom" ? 75 : -75 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const animationProps = {
    variants: animateContent,
    initial: "hidden",
    animate: animationControls,
  };

  const transitionProps = {
    ease: [0.25, 0.13, 0.39, 1],
    delay: 0.5,
    duration: 0.75,
  };

  React.useEffect(() => {
    if (contentInView) {
      animationControls.start("visible");
    }
  }, [contentInView, animationControls]);

  const { clippy } = useStyles();
  return (
    <div className={clippy} {...(viewAnchor === "top" && { ref: contentRef })}>
      <motion.div
        {...animationProps}
        transition={{ ...transitionProps, delay: initialDelay + delay }}
      >
        {children}
      </motion.div>
      {viewAnchor === "bottom" && <span ref={contentRef}></span>}
    </div>
  );
};

export default AnimatedContent;
