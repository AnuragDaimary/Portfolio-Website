import React from "react";
import useStyles from "./styles";

const Blob: React.FC = () => {
  const { blobScreen, blob } = useStyles();
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
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <>
      <div className={blobScreen}></div>
      <div ref={blobRef} className={blob}></div>
    </>
  );
};

export default Blob;
