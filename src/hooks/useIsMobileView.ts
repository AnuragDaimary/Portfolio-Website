import React from "react";
import { SCREENS } from "utils/styleUtils";

const useIsMobileView = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const windowResizeHandler = () => setWindowWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    }
  }, []);

  return windowWidth <= SCREENS.Mobile;
}

export default useIsMobileView;