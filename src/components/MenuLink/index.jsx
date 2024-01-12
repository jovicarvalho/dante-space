import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? styles.link
          : isActive
          ? `${styles.link} ${styles.linkDestacado}`
          : styles.link
      }
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
