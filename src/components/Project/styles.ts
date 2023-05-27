import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projectContainer: {
    margin: ["4rem", "auto"],
    display: "flex",
    flexDirection: "column",
  },
  imgContainer: {
    width: "100%",
    maxWidth: "350px",
    height: "450px",
    margin: "auto",
    "& img": {
      width: "100%",
      height: "100%",
    }
  },
  projectName: {
    fontSize: "56px",
    margin: ["2rem", 0]
  },
  projectDescription: {
    textAlign: "left"
  },
  projectInfo: {
    display: "flex",
    flexDirection: "column",
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    margin: ["2rem", 0]
  },
  skill: {
    padding: ["0.5rem", "1rem"],
    border: ["1px", "solid", "white"],
    borderRadius: "20px"
  },
  caseStudyButton: {
    padding: ["1rem", "1.5rem"],
    borderRadius: "5px",
    background: "white",
    color: "black",
    alignSelf: "center",
    border: "none",
    cursor: "pointer",
    "&[disabled]": {
      background: "rgba(255,255,255,0.5)",
      cursor: "default",
    },
    "& > a": {
      color: "black",
      textDecoration: "none"
    }
  },
  "@media (min-width: 750px)": {
    projectContainer: {
      flexDirection: "row",
      gap: "4rem",
      "&:nth-child(even)": {
        flexDirection: "row-reverse"
      }
    },
    imgContainer: {
      minWidth: "350px"
    },
    caseStudyButton: {
      alignSelf: "flex-start"
    },
    skillsContainer: {
      justifyContent: "flex-start"
    }
  },
});

export default useStyles;