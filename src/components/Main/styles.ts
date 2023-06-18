import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
  mainContentContainer: {
    fontSize: "48px",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  mainContent: {
    display: "block",
    textAlign:"left",
  },
  "@media (max-width: 850px)": {
    mainContentContainer: {
      fontSize: "32px"
    }
  },
  "@media (max-width: 650px)": {
    mainContentContainer: {
      fontSize: "28px"
    }
  },
});

export default useStyles;