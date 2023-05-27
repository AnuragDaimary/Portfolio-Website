import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  selectedWorkContainer: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "auto",
  },
  selectedWorkHeading: {
    textAlign: "center",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  "@media (min-width: 750px)": {
    selectedWorkHeading: {
      textAlign: "left"
    }
  }
});

export default useStyles;