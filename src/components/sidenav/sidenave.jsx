import React, { useContext } from "react";
import "./sidenave.css";
import { Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { Sidenavcontext } from "../..";
import { Link } from "react-scroll";
function Mysidenav() {
  const { sidenav, setSidenav } = useContext(Sidenavcontext);
  console.log(sidenav, "in sid bar");
  return (
    <div
      className={sidenav ? "mysidnav" : "mysidnav1"}
      // style={{ width: `${sidenav ? "200px" : "0"}` }}
    >
      <div className="linkdiv" style={{ marginTop: "30%" }}>
        <Link
          to="howitworks"
          className="navbar-a"
          // onClick={() => setSidenav(false)}
        >
          How It Works
        </Link>
      </div>
      <div className="linkdiv">
        <Link
          // onClick={() => setScrolled(true)}
          to="earnPointsSection"
          // smooth={false}
          // duration={20}
          className="navbar-a"
        >
          Earn Points
        </Link>
      </div>

      <div className="linkdiv">
        <Link to="memberStatus" className="navbar-a">
          Member Status
        </Link>
      </div>
      <div className="linkdiv">
        <Link to="faq" className="navbar-a">
          FAQ
        </Link>
      </div>
      <div className="linkdiv">
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://theowpc.com"
          target="_blank"
          className=" navbar-a mr-10"
        >
          Dashboard
        </a>
      </div>
    </div>
  );
}
export default Mysidenav;
