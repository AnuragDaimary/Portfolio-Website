import React, { useCallback } from "react";
import { SCREEN_SIZE, SCREEN_TYPE } from "utils/styleConstants";

const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState<string>(SCREEN_TYPE.Mobile);

  const getScreenType = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= SCREEN_SIZE.Desktop) {
      return SCREEN_TYPE.Desktop;
    } else if (windowWidth >= SCREEN_SIZE.Tablet) {
      return SCREEN_TYPE.Tablet;
    } else {
      return SCREEN_TYPE.Mobile;
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