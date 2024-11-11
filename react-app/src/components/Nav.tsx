import React from "react";
import logo from "../assets/images/Logo.png";
import styles from "./Nav.module.css";
import * as data from "./links.json";
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <>
      <div className={styles["links-container"]}>
        {links.map((link: Link) => {
          return (
            <div key={link.href} className={styles["link"]}>
              <a href={link.href}>{link.label}</a>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles["header-logo"]} />
    </nav>
  );
};

export default Nav;
