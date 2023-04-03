import { useEffect } from "react";
import Main from "../Main";
import Work from "../Work";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Main />
      <Work />
    </>
  )
}

export default Home;