import React, { useCallback } from "react";
import { SCREENS, SCREEN_TYPE } from "utils/styleUtils";

const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState<string>(SCREEN_TYPE.Mobile);

  const getScreenType = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= SCREENS.Mobile) {
      return SCREEN_TYPE.Mobile;
    } else if (windowWidth <= SCREENS.Laptop) {
      return SCREEN_TYPE.Tablet;
    } else {
      return SCREEN_TYPE.Laptop;
    }
  }

  const resizeHandler = useCallback(() => {
    const screenType = getScreenType();
    setScreenSize(screenType);
  }, []);

  React.useEffect(() => {
    setScreenSize(getScreenType())
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [resizeHandler]);

  return screenSize;

}

export default useGetScreenSize;