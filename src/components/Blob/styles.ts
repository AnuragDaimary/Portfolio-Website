import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes rotate": {
    from: { rotate: "0deg", },
    "50%": { scale: "1 1.5", rotate: "180deg" },
    to: { rotate: "360deg"  },
  },
  blobScreen: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    backdropFilter: "blur(150px)",
  },
  blob: {
    position: "absolute",
    background: `linear-gradient(to right, red, blue)`,
    width: 300,
    height: 300,
    borderRadius: "50%",
    translate: "-50% -50%",
    zIndex: -2,
    animation: "$rotate 5s linear infinite",
  },
  blobContainer: {
    overflow: "hidden",
    zIndex: -1,
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
  }
})

export default useStyles;