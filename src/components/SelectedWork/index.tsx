import React from "react";
import useStyles from "components/SelectedWork/styles";
import Project from "components/Project";
import Loblaws from "assets/images/Loblaws.webp";
import LoblawsIntroVideo from "assets/videos/LoblawsIntro.mp4";
import PrestoIntroVideo from "assets/videos/PrestoIntro.mp4";
import Cura from "assets/images/Cura.webp";
import Presto from "assets/images/Presto.webp";
import AnimatedContent from "components/AnimatedContent";
import {
  CuraContent,
  LoblawsContent,
  PrestoContent,
} from "components/SelectedWork/workContent";
import useGetScreenSize from "hooks/useGetScreenSize";
import { ScreenType } from "appTypes";

const SelectedWork: React.FC = () => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const { selectedWorkContainer, selectedWorkHeading, projectsContainer } =
    useStyles();
  const screenSize = useGetScreenSize() as ScreenType;

  React.useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.endsWith("#selectedWork")) {
      headingRef.current?.scrollIntoView();
    }
  }, []);
  return (
    <section className={selectedWorkContainer}>
      <AnimatedContent>
        <h2 ref={headingRef} id="selectedWork" className={selectedWorkHeading}>
          Selected Work
        </h2>
      </AnimatedContent>
      <div className={projectsContainer}>
        <Project
          name="Loblaws"
          description={LoblawsContent[screenSize]}
          skills={["UX Research", "UI/UX Design", "Case Study"]}
          img={Loblaws}
          video={LoblawsIntroVideo}
          link="/loblaws"
        />

        <Project
          name="Cura"
          description={CuraContent[screenSize]}
          skills={["UX Research", "UI/UX Design"]}
          img={Cura}
        />

        <Project
          name="Presto"
          description={PrestoContent[screenSize]}
          skills={["UI Design"]}
          img={Presto}
          video={PrestoIntroVideo}
        />
      </div>
    </section>
  );
};

export default SelectedWork;
