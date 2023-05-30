import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  loblawsIntro: {
    height: "100vh",
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
    marginTop: "2rem",
    border: ["1px", "solid", "white"],
    padding: "1rem",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(to right, rgba(255,255,255, 0.1), rgba(255,255,255, 0.2))",
  },
  projectOverviewHeading: {
    textAlign: "center",
    marginTop: "1rem",
  },
  projectOverviewSection: {
    margin: ["2rem", "1rem"],
    "& > h4": {
      marginBottom: "0.5rem",
    }
  }
});

export default useStyles;