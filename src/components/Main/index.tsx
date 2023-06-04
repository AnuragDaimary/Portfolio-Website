import React from "react";
import useStyles from "components/Main/styles";
import useGetScreenSize from "hooks/useGetScreenSize";
import AnimatedContent from "components/AnimatedContent";

const SCREEN_TO_CONTENT_MAP: Record<string, string[]> = {
  Mobile: [
    "Hi, I am Anurag",
    "a product designer",
    "and a UX researcher",
    "making digital",
    "experiences for people",
    "with a user centric",
    "approach",
  ],
  Tablet: [
    "Hi, I am Anurag, a product designer",
    "and a UX researcher making digital",
    "experiences for people with a user",
    "centric approach.",
  ],
  Laptop: [
    "Hi, I am Anurag, a Product designer and UX Researcher",
    "making digital experiences for people with a user centric",
    "approach.",
  ],
};

const Main: React.FC = () => {
  const screeSize = useGetScreenSize();

  const { main, mainContent, mainContentContainer } = useStyles();
  return (
    <section className={main}>
      <h1 className={mainContentContainer}>
        {SCREEN_TO_CONTENT_MAP[screeSize].map((splitContent, idx) => (
          <AnimatedContent key={`main-content-${idx}`} delay={idx * 0.1}>
            <span className={mainContent}>{splitContent}</span>
          </AnimatedContent>
        ))}
      </h1>
    </section>
  );
};

export default Main;
