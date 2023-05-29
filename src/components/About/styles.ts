import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutSectionContainer: {
    padding: ["4rem", "1rem"],
  },
  aboutSection: {
    margin: ["8rem", "auto"],
    textAlign: "left",
    width: "fit-content",
    fontSize: "28px",
  },
  sectionContentContainer: {
    marginBottom: "2rem",
  },
  aboutInfoHeading: {
    fontSize: "60px",
  },
  aboutInfoContentContainer: {
    width: "fit-content",
    textAlign: "left",
    margin: ["2rem", "auto"],
    translate: "50%",
  },
  linksContainer: {
    listStyleType: "none",
  }
});

export default useStyles;