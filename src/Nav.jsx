import { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./assets/Netflix_Logos_01-Wordmark (1).jpg";
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 100) {
    //     handleShow(true);
    //   } else handleShow(false);
    // });
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix Logo" />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar logo"
      />
    </div>
  );
};

export default Nav;