import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ vidUrl, imgName }) => {
  const vidRef = useRef(null);
  const overlayRef = useRef(null);
  const navigate = useNavigate();

  const playVideo = () => {
    vidRef.current.muted = true;
    vidRef.current.play();
  }
  
  const pauseVideo = () => {
    vidRef.current.pause();
    vidRef.current.currentTime = 0;
  }

  const bg2 = require(`../../images/${imgName}.png`);

  return (
    <div className="card mt-[35px] relative" onMouseOver={playVideo} onMouseOut={pauseVideo}>
      <div ref={overlayRef} style={{
        backgroundImage: `url(${bg2})`
      }} className="card-overlay" onClick={() => navigate(`/${imgName.toLowerCase()}`)}></div>
      <video ref={vidRef}>
        <source src={vidUrl}></source>
      </video>
      <div className="absolute bottom-[20px] text-lg font-bold left-1/2 -translate-x-1/2">Read Case Study</div>
    </div>
  );
};

export default Card;