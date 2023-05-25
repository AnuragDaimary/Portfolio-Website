import React from "react";
import useStyles from "./styles";

const Blob: React.FC = () => {
  const { blobScreen, blob, blobContainer } = useStyles();
  const blobRef = React.useRef<HTMLDivElement>(null);

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    blobRef.current?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards", easing: "ease-in" }
    );
  };

  React.useEffect(() => {
    window.addEventListener("pointermove", mouseMove);

    return () => {
      window.removeEventListener("pointermove", mouseMove);
    };
  }, []);
  return (
    <div className={blobContainer}>
      <div className={blobScreen}></div>
      <div ref={blobRef} className={blob}></div>
    </div>
  );
};

export default Blob;
