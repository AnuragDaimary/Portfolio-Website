import { createUseStyles } from "react-jss";

interface StyleProps {
  video?: string;
  link?: string;
}

const useStyles = createUseStyles({
  projectContainer: {
    margin: ["4rem", "auto"],
    display: "flex",
    flexDirection: "column",
  },
  imgContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "350px",
    height: "450px",
    margin: "auto",
  },
  projectImage: ({ video, link }: StyleProps) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    transition: ["opacity", "250ms", "ease-in"],
    cursor: link ? "pointer" : "default",
    "&:hover": {
      opacity: video ? 0 : 1,
    }
  }),
  projectVideo: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  projectName: {
    fontSize: "56px",
    margin: ["2rem", 0],
  },
  projectDescription: {
    textAlign: "left",
    width: "fit-content",
    margin: [0, "auto"],
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
    borderRadius: "20px",
    display: "inline-block",
  },
  caseStudyButton: {
    padding: ["1rem", "1.4rem"],
    borderRadius: "30px",
    background: "white",
    color: "black",
    border: "none",
    cursor: "pointer",
    "&[disabled]": {
      background: "rgba(255,255,255,0.5)",
      cursor: "default",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    "& > a": {
      color: "black",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1.1rem",
    }
  },
  overlayText: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    translate: "-50%"
  },
  alignSelf: {
    alignSelf: "center",
  },
  "@media (min-width: 750px)": {
    projectContainer: {
      flexDirection: "row",
      gap: "4rem",
      "&:nth-child(even)": {
        flexDirection: "row-reverse"
      }
    },
    projectDescription: {
      width: "100%",
    },
    imgContainer: {
      minWidth: "350px"
    },
    alignSelf: {
      alignSelf: "flex-start"
    },
    skillsContainer: {
      justifyContent: "flex-start"
    },
    projectName: {
      textAlign: "left",
    },
  },
});

export default useStyles;