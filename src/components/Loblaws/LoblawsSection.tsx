import React from "react";
import useStyles from "components/Loblaws/styles";

interface LoblawsSectionProps {
  id: string;
  heading: string;
  children?: JSX.Element;
}

const LoblawsSection: React.FC<LoblawsSectionProps> = ({
  id,
  heading,
  children,
}) => {
  const { loblawsSectionHeading, loblawsSection } = useStyles();
  return (
    <section className={loblawsSection}>
      <h2 className={loblawsSectionHeading}>
        <span>{id}</span>
        <span>{heading}</span>
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default LoblawsSection;
