import React from "react";
import LoblawsMain from "assets/videos/LoblawsMain.mp4";
import useStyles from "components/Loblaws/styles";

const Loblaws: React.FC = () => {
  const { loblawsIntro, loblawsIntroVideo } = useStyles();
  return (
    <div>
      <div className={loblawsIntro}>
        <video className={loblawsIntroVideo}>
          <source src={LoblawsMain}></source>
        </video>
      </div>
    </div>
  );
};

export default Loblaws;
