import React from "react";
import useStyles from "components/SelectedWork/styles";
import Project from "components/Project";
import Loblaws from "assets/images/Loblaws.webp";
import LoblawsIntroVideo from "assets/videos/LoblawsIntro.mov";
import Cura from "assets/images/Cura.webp";
import Presto from "assets/images/Presto.webp";
import AnimatedContent from "components/AnimatedContent";

const SelectedWork: React.FC = () => {
  const { selectedWorkContainer, selectedWorkHeading, projectsContainer } =
    useStyles();
  return (
    <section className={selectedWorkContainer}>
      <h2 id="selectedWork" className={selectedWorkHeading}>
        <AnimatedContent>
          <>Selected Work</>
        </AnimatedContent>
      </h2>
      <div className={projectsContainer}>
        <Project
          name="Loblaws"
          description={[
            "Re-designing the digital experience of Canada's leading",
            "supermarket chain with usability in mind",
          ]}
          skills={["UX Research", "UI/UX Design", "Case Study"]}
          img={Loblaws}
          video={LoblawsIntroVideo}
          link="/loblaws"
        />

        <Project
          name="Cura"
          description={[
            "Healthcare system bridging the distance between woman",
            "living in remote communities and accessible parental care",
            "using modern day biotechnology",
          ]}
          skills={["UX Research", "UI/UX Design"]}
          img={Cura}
        />

        <Project
          name="Presto"
          description={[
            "Wearable concept for electronic payment system of Toronto’s",
            "public transit system",
          ]}
          skills={["UI Design"]}
          img={Presto}
        />
      </div>
    </section>
  );
};

export default SelectedWork;
