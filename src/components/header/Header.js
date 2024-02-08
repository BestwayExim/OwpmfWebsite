import React, { useContext } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import  logo from "../../Assets/images/logo.png"
import InsightsIcon from "@mui/icons-material/Insights";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Sidenavcontext } from "../..";
import { display } from "@mui/system";

function MyHeader() {
  const { sidenav, setSidenav } = useContext(Sidenavcontext);
  const handleNavbarToggle = () => {
    setSidenav(!sidenav);
  };

  return (
    <nav
      className="navbar sticky-top  navbar"
      style={{
        backgroundColor: "#0E0E0E",
        display: "flex",
     padding:"10px",
        alignItems: "center",
        paddingTop: 0,
      }}
    >
      <div>
        <a className="" href="#">
          <img
            className="oa-footer__logo-img lazy hidden-xs hidden-sm m-t-30 loaded"
            style={{  margin:"15px" ,width: "60px", height: "50px" }}
            data-src={logo}
            alt="Oner Active Logo"
            src={logo}
            data-was-processed="true"
          />
        </a>
      </div>

   
      {/* <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

      {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              color: "white",
              //justifyContent: "space-between",
              marginRight: "5%",
            }}
          >
            <WorkOutlineIcon style={{ marginRight: "15%" }} />
            <SearchIcon style={{ marginRight: "15%" }} />
            <PersonOutlineIcon style={{ marginRight: "15%" }} />
            <FavoriteBorderIcon />
          </div>
        </div> */}
      {/* </div> */}
    </nav>
  );
}

export default MyHeader;
