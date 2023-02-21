import Card from "../Card";

const Home = () => {
  const projectNames = ["Loblaws", "Micro Animation", "Cura", "Sound Design", "Something"]
  let scrollPt = 0;

  const detectedTrackPad = (event) => {
    if (event.wheelDeltaY) {
      if (event.wheelDeltaY === (event.deltaY * -3)) {
        return true
      }
    }
    else if (event.deltaMode === 0) {
      return true;
    }
    return false;
  }

  window.onwheel = (event) => {
    const { deltaX, deltaY } = event;
    const isTrackpad = detectedTrackPad(event);

    const scrollMultiplier = isTrackpad ? 1 : 5;
    const projects = document.querySelector("#projects");
    
    const zero = 185;
    const hundred = projects.clientWidth - zero; 
    const increment = (hundred - zero) / 100;
    
    if (deltaY > 0 || deltaX > 0) {
      scrollPt += (increment * scrollMultiplier);
      scrollPt = Math.min(scrollPt, hundred);
    } else if (deltaY < 0 || deltaX < 0){
      scrollPt -= (increment * scrollMultiplier);
      scrollPt = Math.max(scrollPt, zero);
    }

    if (isTrackpad) {
      projects.style.transition = `none`;
    }
    projects.style.transform = `translate(-${scrollPt}px, -50%)`;
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