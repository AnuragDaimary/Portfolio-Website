import { createUseStyles } from "react-jss";
import { Colors } from "utils/styleConstants";

const useStyles = createUseStyles({
  selectedWorkContainer: {
    padding: "2rem",
    margin: "auto",
  },
  selectedWorkHeading: {
    textAlign: "center",
    color: Colors.PrimaryText,
    fontSize: "32px",
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