import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  selectedWorkContainer: {
    padding: "2rem",
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