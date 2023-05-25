import React, { useCallback } from "react";
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

interface MobileNavigationProps {
  setIsMenuOpen: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  setIsMenuOpen,
}) => {
  const scrollPosition = React.useRef({
    top: window.scrollY,
    left: window.scrollX,
  });
  const {
    mobileMenuContainer,
    mobileMenuCloseButton,
    mobileMenuHeading,
    mobileNavItemsContainer,
    mobileNavItem,
  } = useStyles();

  const disableScroll = useCallback(
    (e: Event) => {
      const { top, left } = scrollPosition.current;
      window.scrollTo(left, top);
    },
    [scrollPosition]
  );

  React.useEffect(() => {
    window.addEventListener("scroll", disableScroll);

    return () => {
      window.removeEventListener("scroll", disableScroll);
    };
  }, [disableScroll]);

  return (
    <div className={mobileMenuContainer}>
      <button className={mobileMenuCloseButton} onClick={setIsMenuOpen}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h2 className={mobileMenuHeading}>Menu</h2>
      <ul className={mobileNavItemsContainer}>
        <NavigationItems className={mobileNavItem} />
      </ul>
    </div>
  );
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { nav, desktopNavItemsContainer } = useStyles();
  const isMobileView = useIsMobileView();

  const renderDesktopNavigation = () => {
    return (
      <ul className={desktopNavItemsContainer}>
        <NavigationItems />
      </ul>
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
      {isMobileView && isMenuOpen && (
        <MobileNavigation setIsMenuOpen={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Navigation;
