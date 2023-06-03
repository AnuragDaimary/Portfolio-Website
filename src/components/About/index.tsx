import React from "react";
import useStyles from "./styles";
import Section from "./section";
import AnimatedContent from "components/AnimatedContent";

const aboutSectionContent = [
  [
    "I am a Product Designer and UX Researcher",
    "from Toronto. I create digital experiences for",
    "people with a user centric approach.",
  ],
  [
    "I specialize in visual design with a strong",
    "focus on user research and interaction.",
  ],
  [
    "I like working with design systems and get",
    "excited over new or updates to existing",
    "design tools.",
  ],
  [
    "Passionate about computer and audio",
    "hardware, video game enthusiast and",
    "a hobby musician.",
  ],
];

const contactContent = [
  {
    label: "Email",
    props: {
      href: "mailto:anuragdaimary.work@gmail.com",
    },
  },
  {
    label: "LinkedIn",
    props: {
      href: "https://linkedin.com/in/anuragdaimary/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    label: "Behance",
    props: {
      href: "https://behance.net/anuragdaimec03",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    label: "Instagram",
    props: {
      href: "https://instagram.com/anurag.daimary/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
];

const About: React.FC = () => {
  const {
    aboutSectionContainer,
    aboutSection,
    sectionContentContainer,
    linksContainer,
    fitContent,
  } = useStyles();
  return (
    <div className={aboutSectionContainer}>
      <div className={aboutSection}>
        {aboutSectionContent.map((section, i) => (
          <div className={sectionContentContainer} key={`about-section-${i}`}>
            {section.map((sectionContent, j) => (
              <AnimatedContent delay={i * 0.2 + j * 0.1}>
                <p key={`about-section-${sectionContent}-${j}`}>
                  {sectionContent}
                </p>
              </AnimatedContent>
            ))}
          </div>
        ))}
      </div>

      <div className={fitContent}>
        <Section
          heading="Working Experience"
          content={
            <>
              <AnimatedContent delay={0.25}>
                <h3>Designer | Certivity</h3>
              </AnimatedContent>
              <AnimatedContent delay={0.5}>
                <p>May 2018 &mdash; August 2018</p>
              </AnimatedContent>
            </>
          }
        />

        <Section
          heading="Get In Touch"
          content={
            <ul className={linksContainer}>
              {contactContent.map((contactObj, idx) => (
                <AnimatedContent delay={0.25 + idx * 0.1}>
                  <li key={`contact-${contactObj.label}-${idx}`}>
                    <a {...contactObj.props}>{contactObj.label}</a>
                  </li>
                </AnimatedContent>
              ))}
            </ul>
          }
        />

        <Section
          heading="Credits"
          content={
            <>
              <AnimatedContent delay={0.25}>
                <h3>Pranshu Teotia | Developer</h3>
              </AnimatedContent>
              <AnimatedContent delay={0.5}>
                <p>
                  <a href="https://linkedin.com/in/pranshuteotia/">LinkedIn</a>
                </p>
              </AnimatedContent>
            </>
          }
        />
      </div>
    </div>
  );
};

export default About;
