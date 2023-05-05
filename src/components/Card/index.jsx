import { useRef } from "react";

const Card = ({ vidUrl }) => {
  const vidRef = useRef(null);
  const overlayRef = useRef(null);

  const playVideo = () => {
    overlayRef.current.style.background = "transparent";
    overlayRef.current.style.transition = "background 200ms ease-in-out"
    vidRef.current.play();
  }
  
  const pauseVideo = () => {
    overlayRef.current.style.background = "#282828";
    vidRef.current.pause();
    vidRef.current.currentTime = 0;
  }

  return (
    <div className="card mt-[35px] relative" onMouseOver={playVideo} onMouseOut={pauseVideo}>
      <div ref={overlayRef} className="absolute top-0 left-0 h-full w-full bg-[#282828]"></div>
      <video id="vid" ref={vidRef} autoPlay={true} style={{ height: "100%", objectFit: "cover"}}>
        <source src={vidUrl}></source>
      </video>
    </div>
  );
};

export default Card;