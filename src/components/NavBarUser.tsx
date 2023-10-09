import { IconLogout, IconHome, IconUser, IconFile } from "@tabler/icons-react";
import classes from "../css/NavbarSimple.module.css";
import { NavLink } from "react-router-dom";

export function NavbarUser() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <NavLink to={"/"} className={classes.link}>
          <IconHome className={classes.linkIcon} stroke={1.5} />
          Home
        </NavLink>
        <NavLink to={"/myform"} className={classes.link}>
          <IconFile className={classes.linkIcon} stroke={1.5} />
          แบบฟอร์ม
        </NavLink>
        <NavLink to={"/profile"} className={classes.link}>
          <IconUser className={classes.linkIcon} stroke={1.5} />
          Profile
        </NavLink>
      </div>
      <div className={classes.footer}>
        <a href="/logout" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
