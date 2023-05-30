import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutSectionContainer: {
    padding: ["4rem", "1rem"],
  },
  aboutSection: {
    margin: ["8rem", "auto"],
    textAlign: "left",
    width: "fit-content",
    fontSize: "20px",
  },
  sectionContentContainer: {
    marginBottom: "2rem",
  },
  aboutInfoHeading: {
    fontSize: "30px",
  },
  aboutInfoContentContainer: {
    width: "fit-content",
    textAlign: "center",
    margin: ["2rem", "auto"],
  },
  linksContainer: {
    listStyleType: "none",
  },
  "@media (min-width: 750px)": {
    aboutInfoHeading: {
      fontSize: "60px",
    },
    aboutSection: {
      fontSize: "28px",
    },
    aboutInfoContentContainer: {
      textAlign: "left",
      translate: "50%",
    }
  }
});

export default useStyles;