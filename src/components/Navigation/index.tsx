import React from "react";
import useStyles from "./styles";
import useIsMobileView from "hooks/useIsMobileView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navigationSections = [
  {
    href: "#",
    label: "Work",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Resume",
  },
];
interface NavigationItemsProps {
  className?: string;
}
const NavigationItems: React.FC<NavigationItemsProps> = ({ className }) => {
  return (
    <>
      {navigationSections.map(({ href, label }, idx) => (
        <li key={`navigation-item-${idx}`}>
          <a className={className} href={href}>
            {label}
          </a>
        </li>
      ))}
    </>
  );
};

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

  const {
    nav,
    desktopNavItemsContainer,
    mobileMenuContainer,
    mobileMenuCloseButton,
    mobileNavItemsContainer,
    mobileNavItem,
    mobileMenuHeading,
  } = useStyles();
  const isMobileView = useIsMobileView();

  const renderDesktopNavigation = () => {
    return (
      <ul className={desktopNavItemsContainer}>
        <NavigationItems />
      </ul>
    );
  };

  const renderMobileNavigation = () => {
    return (
      <div className={mobileMenuContainer}>
        <button
          className={mobileMenuCloseButton}
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className={mobileMenuHeading}>Menu</h2>
        <ul className={mobileNavItemsContainer}>
          <NavigationItems className={mobileNavItem} />
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className={nav}>
        <p>Anurag Daimary</p>
        {isMobileView ? (
          <MobileNavigationContainer onClick={() => setIsMenuOpen(true)} />
        ) : (
          renderDesktopNavigation()
        )}
      </nav>
      {isMobileView && isMenuOpen && renderMobileNavigation()}
    </>
  );
};

export default Navigation;
