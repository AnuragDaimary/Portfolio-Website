import Card from "../Card";

const Home = () => {
  const projectNames = ["Loblaws", "Micro Animation", "Cura", "Sound Design", "Something"]
  let scrollPt = 0;

  window.onwheel = (event) => {
    const { deltaX, deltaY } = event;
    const projects = document.querySelector("#projects");
    
    const zero = 185;
    const hundred = projects.clientWidth - zero; 
    const increment = (hundred - zero) / 100;
    
    if (deltaY > 0 || deltaX > 0) {
      scrollPt += increment;
      scrollPt = Math.min(scrollPt, hundred);
    } else if (deltaY < 0 || deltaX < 0){
      scrollPt -= increment;
      scrollPt = Math.max(scrollPt, zero);
    }
    projects.style.transform = `translate(-${scrollPt}px, -50%)`
    event.stopPropagation();
  }

  return(
    <div id="home">
      <div id="projects" className="cards-container">
        {projectNames.map((projectName, index) => <Card key={`${projectName}-${index}`} projectName={projectName} />)}
      </div>
    </div>
  );
};

export default Home;