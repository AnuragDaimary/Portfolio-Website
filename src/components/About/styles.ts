import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutSectionContainer: {
    padding: ["4rem", "1rem"],
  },
  aboutSection: {
    margin: ["8rem", "auto"],
    textAlign: "left",
    width: "fit-content",
    fontSize: "18px",
  },
  sectionContentContainer: {
    marginBottom: "2rem",
  },
  aboutInfoHeading: {
    fontSize: "30px",
    textAlign: "left",
  },
  aboutInfoContentContainer: {
    width: "fit-content",
    textAlign: "left",
    margin: ["2rem", "auto"],
  },
  linksContainer: {
    listStyleType: "none",
  },
  fitContent: {
    width: "fit-content",
    margin: "auto",
  },
  "@media (min-width: 400px)": {
    aboutSection: {
      fontSize: "24px",
    }
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