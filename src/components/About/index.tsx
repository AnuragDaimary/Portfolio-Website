import React from "react";
import useStyles from "./styles";
import Section from "./section";
import AnimatedContent from "components/AnimatedContent";
import { aboutSectionContent, contactContent } from "./aboutContent";
import useGetScreenSize from "hooks/useGetScreenSize";
import { ScreenType } from "appTypes";

const About: React.FC = () => {
  const screenSize = useGetScreenSize() as ScreenType;
  const {
    aboutSectionContainer,
    aboutSection,
    sectionContentContainer,
    linksContainer,
    fitContent,
    aboutInfoContent,
  } = useStyles();
  return (
    <div className={aboutSectionContainer}>
      <div className={aboutSection}>
        {aboutSectionContent[screenSize].map((section, i) => (
          <div className={sectionContentContainer} key={`about-section-${i}`}>
            {section.map((sectionContent, j) => (
              <AnimatedContent
                key={`about-section-${sectionContent}-${j}`}
                delay={i * 0.2 + j * 0.1}
              >
                <p>{sectionContent}</p>
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
                <h3 className={aboutInfoContent}>Designer | Certivity</h3>
              </AnimatedContent>
              <AnimatedContent delay={0.5}>
                <p className={aboutInfoContent}>May 2018 &mdash; August 2018</p>
              </AnimatedContent>
            </>
          }
        />

        <Section
          heading="Get In Touch"
          content={
            <ul className={linksContainer}>
              {contactContent.map((contactObj, idx) => (
                <AnimatedContent
                  key={`contact-${contactObj.label}-${idx}`}
                  delay={0.25 + idx * 0.1}
                >
                  <li>
                    <a className={aboutInfoContent} {...contactObj.props}>{contactObj.label}</a>
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
                <h3 className={aboutInfoContent}>Pranshu Teotia | Developer</h3>
              </AnimatedContent>
              <AnimatedContent delay={0.5}>
                <p>
                  <a className={aboutInfoContent} href="https://linkedin.com/in/pranshuteotia/">LinkedIn</a>
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
