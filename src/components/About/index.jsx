import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutSection from "../AboutSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

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

  const aboutSections = [
    ["I am a Product Designer and UX Researcher", "from Toronto. I create digital experiences for", "people with a user centric approach."],
    ["I specialize in visual design with a strong", "focus on user research and interaction."],
    ["I like working with design systems and get", "excited over new or updates to existing", "design tools."],
    ["Passionate about computer and audio", "hardware, video game enthusiast and", "a hobby musician."]
  ];

  const socialArray = [
    ["mailto:anuragdaimary.work@gmail.com", "Email"],
    ["https://linkedin.com/in/anuragdaimary/", "LinkedIn"],
    ["https://behance.net/anuragdaimec03", "Behance"],
    ["https://instagram.com/anurag.daimary/", "Instagram"],
  ]
  
  return (
    <>
      <section id="about">
        {aboutSections.map((abtSection, i) => <div key={`abt-section-${i}`} className="about-desc">
        {abtSection.map((chunk, idx) => <span className="block clippy flex-1" key={`${chunk}-${idx}`}>
              <motion.p {...animateProps1} transition={{...transitionProps, delay: (0.5 + (i * 0.35))  + (0.2 * idx)}}>{chunk}</motion.p>
            </span>)}
        </div>)}
      </section>
      <section className="about-section-container">
        <AboutSection sectionName="Working Experience" sectionContent={
          <div className="flex-1">
            <h6>Designer • Certivity (Startup)</h6>
            <p>May 2018 - August 2018</p>
          </div>
        } />

        <AboutSection sectionName="Get In Touch" sectionContent={
          <div className="flex-1">
            {socialArray.map(([link, social], i) => {
              const props = { target: "_blank", rel: "noopener noreferrer"}
              if (social === "Email") {
                return <motion.div {...animateProps1} transition={{...transitionProps, delay: 0.5 + (i*0.3)}}><a href={link} className="section-hover">{social}</a></motion.div>
              } else {
                return <motion.div {...animateProps1} transition={{...transitionProps, delay: 0.5 + (i*0.3)}}><a {...props} href={link} className="section-hover">{social}</a></motion.div>
              }
            })}
          </div>
        } />


        <AboutSection sectionName="Credits" sectionContent={
          <div className="flex-1">
            <h6>Pranshu Teotia • Developer</h6>
            <div><a href="https://linkedin.com/in/pranshuteotia/" target="_blank" rel="noopener noreferrer" className="hover:text-section">LinkedIn</a></div>
          </div>
        } />
      </section>
    </>
  )
}

export default About;