import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useStyles from "components/Navigation/styles";
import navigationSections from "components/Navigation/navigationSections";

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

  const disableScroll = React.useCallback(
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
        {navigationSections.map(({ props, label }, idx) => (
          <li key={`navigation-item-${idx}`} onClick={closeMenu}>
            <a className={mobileNavItem} {...props}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
