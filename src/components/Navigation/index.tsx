import React from "react";
import useStyles from "./styles";
import useIsMobileView from "hooks/useIsMobileView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AnimatedContent from "components/AnimatedContent";
import MobileNavigation from "components/Navigation/mobileNavigation";
import navigationSections from "components/Navigation/navigationSections";

interface MobileNavigationContainerProps {
  onClick: () => void;
}
const MobileNavigationContainer: React.FC<MobileNavigationContainerProps> = ({
  onClick,
}) => {
  const { mobileNavButton } = useStyles();

  return (
    <>
      <button className={mobileNavButton} onClick={onClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { nav, desktopNavItemsContainer } = useStyles();
  const isMobileView = useIsMobileView();

  const renderDesktopNavigation = () => {
    return (
      <ul className={desktopNavItemsContainer}>
        {navigationSections.map(({ props, label }, idx) => (
          <AnimatedContent
            key={`navigation-item-${idx}`}
            from="top"
            initialDelay={1.25 + 0.1 * idx}
          >
            <li onClick={() => setIsMenuOpen(false)}>
              <a {...props}>{label}</a>
            </li>
          </AnimatedContent>
        ))}
      </ul>
    );
  };

  return (
    <>
      <nav className={nav}>
        <AnimatedContent from="top" initialDelay={1}>
          <p>
            <a href="/">Anurag Daimary</a>
          </p>
        </AnimatedContent>
        {isMobileView ? (
          <AnimatedContent from="top" initialDelay={1.2}>
            <MobileNavigationContainer onClick={() => setIsMenuOpen(true)} />
          </AnimatedContent>
        ) : (
          renderDesktopNavigation()
        )}
      </nav>
      {isMobileView && isMenuOpen && (
        <MobileNavigation closeMenu={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Navigation;
