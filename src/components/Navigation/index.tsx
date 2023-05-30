import React, { useCallback } from "react";
import useStyles from "./styles";
import useIsMobileView from "hooks/useIsMobileView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Resume from "assets/AnuragDaimaryResume.pdf";

const navigationSections = [
  {
    props: {
      href: "/#selectedWork",
    },
    label: "Work",
  },
  {
    props: {
      href: "/about",
    },
    label: "About",
  },
  {
    props: {
      href: Resume,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    label: "Resume",
  },
];
interface NavigationItemsProps {
  className?: string;
  closeMenu?: () => void;
}
const NavigationItems: React.FC<NavigationItemsProps> = ({
  className,
  closeMenu,
}) => {
  return (
    <>
      {navigationSections.map(({ props, label }, idx) => (
        <li key={`navigation-item-${idx}`} onClick={closeMenu}>
          <a className={className} {...props}>
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
  closeMenu: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ closeMenu }) => {
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
      <button className={mobileMenuCloseButton} onClick={closeMenu}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h2 className={mobileMenuHeading}>Menu</h2>
      <ul className={mobileNavItemsContainer}>
        <NavigationItems className={mobileNavItem} closeMenu={closeMenu} />
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
        <p>
          <a href="/">Anurag Daimary</a>
        </p>
        {isMobileView ? (
          <MobileNavigationContainer onClick={() => setIsMenuOpen(true)} />
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
