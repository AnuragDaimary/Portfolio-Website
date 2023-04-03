import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutSection from "../AboutSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  const sentence = {
    hidden: { opacity: 1, y: 75},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const animateProps1 = {
    variants: sentence,
    initial: "hidden",
    animate: "visible",
  }

  const transitionProps = {
    ease: [0.25, 0.13, 0.39, 1],
    delay: 0.5,
    duration: 1,
  }

  const aboutSection1 = ["I am a UX Designer and Researcher based", "in Toronto. I create digital experiences for", "people with a user centric approach."]
  const aboutSection2 = ["I specialize in visual design with a strong", "focus on user research and interaction."]
  return (
    <>
      <section id="about">
      <div className="about-desc">
        {aboutSection1.map((chunk, idx) => {
          return <span className="block clippy flex-1" key={`${chunk}-${idx}`}>
            <motion.p {...animateProps1} transition={{...transitionProps, delay: 0.5 + (0.2 * idx)}}>{chunk}</motion.p>
          </span>
        })}
      </div>
      <div className="about-desc">
        {aboutSection2.map((chunk, idx) => {
            return <span className="block clippy flex-1" key={`${chunk}-${idx}`}>
              <motion.p {...animateProps1} transition={{...transitionProps, delay: 1 + (0.2 * idx)}}>{chunk}</motion.p>
            </span>
          })}
      </div>
      </section>
      <section className="about-section-container">
        <AboutSection sectionName="Working Experience" sectionContent={
          <div className="flex-1">
            <h6>Designer • Certivity (Startup)</h6>
            <p className="text-section">May 2018 - August 2018</p>
          </div>
        } />

        <AboutSection sectionName="Get In Touch" sectionContent={
          <div className="flex-1">
            <div><a href="mailto:anuragdaimary.work@gmail.com" className="text-section">Email</a></div>
            <div><a href="https://linkedin.com/in/anuragdaimary/" target="_blank" rel="noopener noreferrer" className="text-section">LiknedIn</a></div>
            <div><a href="https://behance.net/anuragdaimec03" target="_blank" rel="noopener noreferrer" className="text-section">Behance</a></div>
            <div><a href="https://instagram.com/anurag.daimary/" target="_blank" rel="noopener noreferrer" className="text-section">Instagram</a></div>
          </div>
        } />


        <AboutSection sectionName="Credits" sectionContent={
          <div className="flex-1">
            <h6>Pranshu Teotia</h6>
            <p className="text-section">Development</p>
            <div><a href="https://linkedin.com/in/pranshuteotia/" target="_blank" rel="noopener noreferrer" className="text-section">LiknedIn</a></div>
          </div>
        } />
      </section>
    </>
  )
}

export default About;