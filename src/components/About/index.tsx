import React from "react";
import useStyles from "./styles";
import Section from "./section";

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

const About: React.FC = () => {
  const {
    aboutSectionContainer,
    aboutSection,
    sectionContentContainer,
    linksContainer,
  } = useStyles();
  return (
    <div className={aboutSectionContainer}>
      <div className={aboutSection}>
        {aboutSectionContent.map((section, idx) => (
          <div className={sectionContentContainer} key={`about-section-${idx}`}>
            {section.map((sectionContent, idx) => (
              <p key={`about-section-${sectionContent}-${idx}`}>
                {sectionContent}
              </p>
            ))}
          </div>
        ))}
      </div>

      <Section
        heading="Working Experience"
        content={
          <>
            <h3>Designer | Certivity</h3>
            <p>May 2018 &mdash; August 2018</p>
          </>
        }
      />

      <Section
        heading="Get In Touch"
        content={
          <ul className={linksContainer}>
            <li>
              <a href="mailto:anuragdaimary.work@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/anuragdaimary/">LinkedIn</a>
            </li>
            <li>
              <a href="https://behance.net/anuragdaimec03">Behance</a>
            </li>
            <li>
              <a href="https://instagram.com/anurag.daimary/">Instagram</a>
            </li>
          </ul>
        }
      />

      <Section
        heading="Credits"
        content={
          <>
            <h3>Pranshu Teotia | Developer</h3>
            <p>
              <a href="https://linkedin.com/in/pranshuteotia/">LinkedIn</a>
            </p>
          </>
        }
      />
    </div>
  );
};

export default About;
