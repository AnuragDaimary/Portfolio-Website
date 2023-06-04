import React from "react";
import { SCREEN_SIZE } from "utils/styleConstants";

const useIsMobileView = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const windowResizeHandler = () => setWindowWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    }
  }, []);

  return windowWidth <= SCREEN_SIZE.Mobile;
}

export default useIsMobileView;