import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  loblawsIntro: {
    height: "100vh",
    position: "relative",
    zIndex: 1,
  },
  loblawsIntroVideo: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  loblawsSection: {
    padding: [0, "1rem"],
    margin: ["4rem", 0]
  },
  loblawsSectionHeading: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    justifyContent: "center",
  },
  projectOverview: {
    margin: "auto",
    marginTop: "2rem",
    border: ["1px", "solid", "white"],
    padding: "1rem",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(to right, rgba(255,255,255, 0.1), rgba(255,255,255, 0.2))",
    maxWidth: "700px",
  },
  projectOverviewHeading: {
    fontSize: "24px",
    textAlign: "center",
    marginTop: "1rem",
  },
  projectOverviewSection: {
    margin: ["2rem", "1rem"],
    "& > h4": {
      marginBottom: "0.5rem",
    }
  },
  loblawsSectionContainer: {
    display: "flex",
    flexDirection: "column",
  },
  loblawsSectionContent: {
    padding: [0, "2rem"],
    textAlign: "left",

    "& > img": {
      margin: ["1rem",  0],
      width: "100%",
    },

    "& > p": {
      marginBottom: "1rem",
    }
  },
  loblawsSectionContentHeading: {
    margin: ["2rem", 0],
    fontSize: "32px",
    fontWeight: "bold",
  },
  loblawsSectionContentSubheading: {
    fontSize: "24px",
    margin: ["1rem", 0],
  },
  loblawsSectionContentTertiaryHeading: {
    margin: ["1rem", 0],
    fontSize: "22px",
    fontWeight: "lighter",
  },
  loblawsSectionSubContent: {
    margin: ["2rem", 0, "2rem", "1rem"],
  },
  loblawsPrototype: {
    width: "50%",
    display: "block",
    margin: ["1rem", "auto"],
    borderRadius: "20px",
  },
  halfWidthImg: {},
  prototypeButton: {
    width: "fit-content",
    display: "block",
    margin: ["3rem", "auto"],
    padding: ["0.5rem", 0],
  },
  prototypeLink: {
    padding: ["0.5rem", "1rem"],
    color: "black",
    textDecoration: "none",
  },
  paddingLeft: {
    paddingLeft: "1rem",
  },
  backgroundCover: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    background: "black",
    width: "100%",
    height: "100vh",
  },
  "@media (min-width: 750px)": {
    projectOverviewHeading: {
      fontSize: "48px",
    },
    loblawsSectionHeading: {
      justifyContent: "flex-start",
    },
    loblawsSection: {
      textAlign: "left",
      padding: [0, "2rem"],
    },
    loblawsSectionContent: {
      textAlign: "left",
    },
    loblawsSectionContainer: {
      flexDirection: "row",
      "& > div": {
        flex: 1,
      }
    },
    loblawsPrototype: {
      width: "25%",
      borderRadius: "30px"
    },
    halfWidthImg: {
      display: "block",
      margin: "auto !important",
      width: "50% !important",
    },
    loblawsSectionSubContent: {
      marginLeft: "2rem",
    }
  }
});

export default useStyles;