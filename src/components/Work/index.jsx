import Project from "../Project";

const Work = () => {
  return(
    <section id="selected-work">
      <h3>Selected Work</h3> 
      <Project projectName="Loblaws" projectDesc={["Re-designing the digital experience of Canada's leading","supermarket chain with usability in mind"]} skills={["UX Research", "UI/UX Design", "Case Study"]} />
      <Project projectName="Cura" projectDesc={["Healthcare system bridging the distance between woman", "living in remote communities and accessible parental care", "using modern day biotechnology"]} skills={["UX Research", "UI/UX Design"]} inverted />
      <Project projectName="Presto" projectDesc={["Wearable concept for electronic payment system of Toronto’s", "public transit system"]} skills={["UI Design"]} />
    </section>
  )
}

export default Work;