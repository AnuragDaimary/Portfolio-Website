import React from "react";
import useStyles from "components/About/styles";

interface SectionProps {
  heading: string;
  content: JSX.Element;
}

const Section: React.FC<SectionProps> = ({ heading, content }) => {
  const { aboutSectionContainer, aboutInfoContentContainer, aboutInfoHeading } =
    useStyles();
  return (
    <section className={aboutSectionContainer}>
      <h2 className={aboutInfoHeading}>{heading}</h2>
      <div className={aboutInfoContentContainer}>{content}</div>
    </section>
  );
};

export default Section;
