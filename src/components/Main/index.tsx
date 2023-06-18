import React from "react";
import useStyles from "components/Main/styles";
import useGetScreenSize from "hooks/useGetScreenSize";
import AnimatedContent from "components/AnimatedContent";
import { ScreenType } from "appTypes";

const SCREEN_TO_CONTENT_MAP: Record<ScreenType, any[]> = {
  Mobile: [
    <>
      Hi, I am <span className="highlight">Anurag</span>
    </>,
    "a product designer",
    "and a UX researcher",
    "making digital",
    "experiences for people",
    "with a user centric",
    "approach",
  ],
  Tablet: [
    <>
      {"Hi, I am "}
      <span className="highlight">Anurag</span>, a product designer
    </>,
    "and a UX researcher making digital",
    "experiences for people with a user",
    "centric approach.",
  ],
  Desktop: [
    <>
      Hi, I am <span className="highlight">Anurag</span>, a Product designer and
      UX Researcher
    </>,
    "making digital experiences for people with a user",
    "centric approach."
  ],
};

const Main: React.FC = () => {
  const screeSize = useGetScreenSize() as ScreenType;

  const { main, mainContent, mainContentContainer } = useStyles();
  return (
    <section className={main}>
      <h1 className={mainContentContainer}>
        {SCREEN_TO_CONTENT_MAP[screeSize].map(
          (splitContent: string, idx: number) => (
            <AnimatedContent key={`main-content-${idx}`} delay={idx * 0.15}>
              <span className={mainContent}>{splitContent}</span>
            </AnimatedContent>
          )
        )}
      </h1>
    </section>
  );
};

export default Main;
