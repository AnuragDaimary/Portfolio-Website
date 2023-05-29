import React from "react";
import useStyles from "components/PageNotFound/styles";

const PageNotFound: React.FC = () => {
  const { pageNotFoundContainer } = useStyles();
  return (
    <div className={pageNotFoundContainer}>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
