import React, { useContext } from "react";
import "./sidenave.css";
import { Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { Sidenavcontext } from "../..";
function Mysidenav() {
  const { sidenav } = useContext(Sidenavcontext);
  console.log(sidenav, "in sid bar");
  return (
    <div
      className={sidenav ? "mysidnav" : "mysidnav1"}
      // style={{ width: `${sidenav ? "200px" : "0"}` }}
    >
      <Nav defaultActiveKey="/home" className="flex-column text-center">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Mysidenav;
