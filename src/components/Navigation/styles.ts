import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  nav: {
    position: "fixed",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ["2rem", "3rem"],
    zIndex: 99,

    "& a": {
      textDecoration: "none",
    }
  },
  desktopNavItemsContainer: {
    listStyleType: "none",
    display: "flex",
    gap: "3rem",
  },
  mobileNavItemsContainer: {
    listStyleType: "none",
    "& > :first-child": {
      borderTop: ["1px", "solid", "white"],
    },
    "& a": {
      textDecoration: "none",
    }
  },
  mobileNavItem: {
    display: "block",
    padding: "1rem",
    borderBottom: ["1px", "solid", "white"],
  },
  mobileNavButton: {
    padding: ["5px", "10px"],
    border: ["1px", "solid", "white"],
    background: "none",
    cursor: "pointer",
  },
  mobileMenuContainer: {
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    let: 0,
    width: "100vw",
    height: "100vh",
    background: "#222",
    padding: ["3rem", 0],
    zIndex: 999,
  },
  mobileMenuCloseButton: {
    background: "none",
    padding: ["0.5rem", "0.75rem"],
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "1rem",
    right: "1rem",

    "& svg": {
      scale: 2
    }
  },
  mobileMenuHeading: {
    margin: ["2rem", 0]
  },
  "@media (min-width: 600px)": {
    nav: {
      padding: ["45px", "90px"],
    },
    desktopNavItemsContainer: {
      gap: "80px",
    }
  }
});

export default useStyles;